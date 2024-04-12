import Form from "react-bootstrap/Form";
import axios from "axios";
import * as React from "react";
import { useState, useEffect } from 'react';
import "../styles/ConnexionMedecin.css";

function CreatePatient() {
  const [userId, setUserId] = useState(localStorage.getItem('id_medecin')); // Récupérer l'ID de l'utilisateur depuis le localStorage

  const CreateTraitement = async (e) => {
    // e.preventDefault();
    const form = e.target.form;
    const patient = {
      id_medecin: userId,
      nom: form.nom.value,
      prenom: form.prenom.value,
    };
    try {
      await axios.post("http://localhost:8000/patient", patient, {id_medecin: localStorage.getItem("id_medecin")});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <h2>Ajouter un nouveau patient</h2>
    <div  className="creer-patient">
      <Form>
        <Form.Control type="text" name="nom" placeholder="Nom du patient" />
        <br />
        <Form.Control type="text" name="prenom" placeholder="Prénom du patient" />
        <br />
        <button onClick={CreateTraitement}>Ajout patient</button>
      </Form>
    </div>
    </>
  );
}

export default CreatePatient;
