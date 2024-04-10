import "../styles/patientList.css";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Patient = () => {
  let  id  = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/admin/medecin/${id}/patients`);
        setPatient(response.data);
        console.log("Patient details", response.data);
      } catch (error) {
        console.error("Erreur chargement des détails du patient", error);
      }
    };

    fetchPatientDetails();
  }, [id]);

  if (!patient) {
    return <p>Chargement...</p>;
  }
  return (
    <div>
      <h2>Détails du Patient</h2>
      <br />

      <div className="table_patient">
        <Table bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Maladie</th>
              <th>Traitement</th>
              <th>Rdv</th>
              <th>Historique</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{patient.id}</td>
              <td>{patient.nom}</td>
              <td>{patient.prenom}</td>
              <td>{patient.maladie}</td>
              <td>{patient.traitement}</td>
              <td>{patient.rendez_vous}</td>
              <td>{patient.historique}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <br />
      <button>Modifier</button>
      <button>Supprimer</button>
    </div>
  );
};

export default Patient;
