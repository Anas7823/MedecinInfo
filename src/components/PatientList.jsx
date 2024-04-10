import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PatientList = () => {
  const [patients, setPatients] = useState([null]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("api/patients");
        setPatients(response.data);
      } catch (err) {
        console.error("Une erreur s'est produite", err);
      }
    };

    fetchPatients();
  }, []);
  if (!patients || !patients.length >= 0) {
    return <p>Chargement...</p>;
  }
  return (
    <div>
      <h2>Liste des Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            Nom: {patient.nom}, Prénom: {patient.prenom}
            <Link to={`/patient/${patient.id}`}>Voir Détails</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
