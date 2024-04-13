import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MedecinList = () => {
  const [medecins, setMedecins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("Chargement = "+isLoading);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedecins = async () => {
      setError(null);
      try {
        const response = await axios.post("http://localhost:8000/admin/medecins", {'id': localStorage.getItem("id")});
        setMedecins(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Une erreur lors de l importation des patients");
        console.error("Une erreur s est produite", err);
      }
    };

    fetchMedecins();
  }, []);

  if (error) {
    return (
      <div>Erreur : {error}</div>
    );
  }
  if (isLoading == true) {
    return (
      <div>
        Chargement de la liste des médecins...
      </div>
    );
  }

  console.log("Medecins = "+medecins);

  return (
    <div>
      <h2>Liste des médecins</h2>
      <ul className="listePatients">
        {medecins.map((medecin) => (
          <li className='listePatients_item' key={medecin.id}>
                <span>Mr/Mme: {medecin.nom} {medecin.prenom}</span>
            <Link to={`/medecin/${medecin.id}`}>Voir Détails</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedecinList;
