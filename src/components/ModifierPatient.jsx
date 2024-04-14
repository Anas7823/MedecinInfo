import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ConnexionMedecin.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ModifierPatient() {
  const idPatient = useParams().idPatient; // Correction de la récupération des paramètres de l'URL

  const infoPatient = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/medecin/patients/${idPatient}`, { id_medecin: localStorage.getItem("id_medecin") });
      setPatient(response.data); // Correction de l'utilisation de response.data
      console.dir("réponse ", response.data); // Utilisation de console.dir avec response.data
    } catch (error) {
      console.error(error);
    }
  };

  const [patient, setPatient] = useState({
    nom: "",
    prenom: ""
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/medecin/patients/${idPatient}`, {
        id_medecin: localStorage.getItem("id_medecin"),
        nom: patient.nom,
        prenom: patient.prenom
      });
      console.log(response);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  useEffect(() => {
    infoPatient();
  }, []);

  return (
    <>
      <h2>Modifier</h2>
      <div className="form_modification">
        <Form.Control
          type="text"
          placeholder="Modifier le nom"
          name="nom"
          onChange={handleChange}
          defaultValue={patient.nom}
        />
        <br />
        <Form.Control
          type="text"
          name="prenom"
          defaultValue={patient.prenom}
          placeholder="Modifier le prénom"
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Valider les Modifications</button>
        {error && <p>Erreur lors de la modification</p>}
      </div>
      <div className="link"><Link to="/">Voir tous les patients</Link></div>
    </>
  );
}
