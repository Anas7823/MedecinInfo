import "../styles/patientList.css";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Patient = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  let  id  = useParams();
  const [patient, setPatient] = useState([]);
  const [traitement, setTraitement] = useState([]);
  const [rdvsPatient, setRdvsPatient] = useState([]);
  const [dateRdv, setDateRdv] = useState("");
  const [heureRdv, setHeureRdv] = useState("");

  const handleProposerRdv = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/new_rdv/patient/${id.idPatient}`,
        
        {
          date: dateRdv,
          heure: heureRdv,
          id_medecin: localStorage.getItem("id_medecin"),
        }
      );

      if (response.status === 200) {
        // Affichage d'un message de confirmation
        alert("Rendez-vous proposé avec succès!");
        // Mise à jour des données du patient et des rendez-vous
        fetchPatientDetails();
      } else {
        console.error("Erreur lors de la proposition du rendez-vous");
      }
    } catch (error) {
      console.error(error);
      // Affichage d'un message d'erreur
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  useEffect(() => {
    console.log("DKLqsdqsjdkqsjdlkjqsldjlkqsjdjqslkdjlqsS");
    console.log(localStorage.getItem("id_medecin"));
    console.log("DKLqsdqsjdkqsjdlkjqsldjlkqsjdjqslkdjlqsS");

    const fetchPatientDetails = async () => {
      console.log("ID = ", id.idPatient);
      try {
        const response = await axios.post(`http://localhost:8000/medecin/patients/${id.idPatient}`, {'id_medecin': localStorage.getItem("id_medecin")});
        setPatient(response.data);
        console.log("Patient details ", response.data);

        const traitement = await axios.post(`http://localhost:8000/patient/${id.idPatient}/traitements`, {'id_medecin': localStorage.getItem("id_medecin")});
        setTraitement(traitement.data);
        console.log("Traitement = ", traitement.data);

        const rdvs = await axios.post(`http://localhost:8000/patient/${id.idPatient}/rdvs`, {'id_medecin': localStorage.getItem("id_medecin")});
        setRdvsPatient(rdvs.data);
        console.log("RDVs = ", rdvs.data);

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
              <th>Nom</th>
              <th>Prenom</th>
              {traitement && traitement.length > 0 ? (
                <>
                  <th>Maladie</th>
                  <th>Traitement</th>
                  <th>Rdv</th>
                  <th>Historique</th>
                </>) : (<></>) }
                  <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{patient.nom}</td>
              <td>{patient.prenom}</td>
              {traitement && traitement.length > 0 ? (
                <>
                  <td>{traitement[0].maladie}</td>
                  <td>{traitement[0].medicaments}</td>
                  <td>
                    {rdvsPatient && rdvsPatient.length > 0 ? (
                      // <>{formatDate(rdvsPatient[0].date)} à {rdvsPatient[0].heure}</>
                      <>{rdvsPatient.map((rdv, index) => (
                        <div key={index}>
                          <p>{formatDate(rdv.date)} à {rdv.heure}</p>
                        </div>
                      ))}</>
                    ) : (
                      <> </>
                    )}
                  </td>
                  <td>
                    {traitement.map((traitement, index) => (
                      <div key={index}>
                        <p>{traitement.maladie}</p>
                        <p>{traitement.medicaments}</p>
                      </div>
                    ))}
                  </td>
                </>
              ) : (
                <> </>
              )}
              <td style={{display: "flex", flexDirection: "column"}}>
                <Link to={`/modifier-patient/${patient.id} `} style={{margin: "5px", backgroundColor: "blue", color: "white", border: 'none', borderRadius: '5px'}}>Modifier</Link>
                <button style={{margin: "5px", backgroundColor: "red", color: "white", border: 'none', borderRadius: '5px'}}>Supprimer</button>
              </td>

            </tr>
          </tbody>

        </Table>
      </div>

      <div style={{width: "80vw", margin: "0 auto"}}>
        <br />
        <br />
        <br />
        <br />
        <h3>Proposer un rendez-vous:</h3>
      <form style={{display: "flex", flexDirection: "column", width: "50%", margin: "0 auto"}}>
        <input
          type="date"
          name="date"
          value={dateRdv}
          onChange={(e) => setDateRdv(e.target.value)}
        />
        <input
          type="time"
          name="heure"
          value={heureRdv}
          onChange={(e) => setHeureRdv(e.target.value)}
        />
        <button
          style={{ margin: "5px", backgroundColor: "blue", color: "white" }}
          onClick={handleProposerRdv}
        >
          Proposer
        </button>
        </form>
      </div>

      <br />
    </div>
  );
};

export default Patient;
