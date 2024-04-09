import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MedecinList = () => {
  const [medecins, setMedecins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedecins = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("api/medecins");
        setMedecins(response.data);
      } catch (err) {
        setError("Une erreur lors de l importation des patients");
        console.error("Une erreur s est produite", err);
      }
      setIsLoading(false);
    };

    fetchMedecins();
  }, []);

  if (isLoading) return <div>Chargement de la liste des patients...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div>
      <h2>Liste des Patients</h2>
      <ul>
        {medecins.map((medecin) => (
          <li key={medecin.id}>
            Nom: {medecin.nom}, Prénom: {medecin.prenom}
            <Link to={`/patient/${medecin.id}`}>Voir Détails</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedecinList;
