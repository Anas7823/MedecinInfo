import '../styles/patientList.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  const id_medecin = localStorage.getItem("id_medecin");
  
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.post(`http://localhost:8000/medecin/${id_medecin}/patients`);
        setPatients(response.data);
      } catch (err) {
        console.error("Une erreur s'est produite", err);
      }
    };

    fetchPatients();
  }, []);
  return (
    <div>
      {patients.length === 0 ? ( // Vérifie si la liste des patients est vide
        <p>Aucun patient trouvé</p>
      ) : (
        <div>
          <h2>Liste des Patients</h2>
          <ul className="listePatients">
            {patients.map((patient) => (
              <li className='listePatients_item' key={patient.id}>
                <span>Mr/Mme: {patient.nom} {patient.prenom}</span>
                <Link to={`/patient/${patient.id}`}>Voir Détails</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PatientList;
