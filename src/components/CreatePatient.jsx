import Form from "react-bootstrap/Form";
import { useState } from "react";
import "../styles/ConnexionMedecin.css";


function CreatePatient() {
  const [patient, setPatient] = useState({
    nom: "",
    prenom: "",
    maladie: "",
    traitement: "",
  });
  const handleChange = (e) => {
    setPatient, { ...patient, [e.target.name]: e.target.value };
    e.target.value;
  };


  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await fetch.post("api", patient);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <h2>Ajouter un nouveau patient</h2>
    <div  className="creer-patient">
      <Form.Control
        type="text"
        name="nom"
        value={patient.nom}
        placeholder="Nom du patient"
        onChange={handleChange}
      />
      <br />
      <Form.Control
        type="text"
        name="prenom"
        value={patient.prenom}
        placeholder="Prénom du patient"
        onChange={handleChange}
      />
      <br />
      <Form.Control
        type="text"
        name="maladie"
        value={patient.maladie}
        placeholder="Maladie"
        onChange={handleChange}
      />

      <br />
      <Form.Control
        type="text"
        name="traitement"
        value={patient.traitement}
        placeholder="traitement"
        onChange={handleChange}
      />

      <br />
      <button  onClick={handleClick}> Ajout patient </button>
      </div>
    </>
  );
}

export default CreatePatient;
