import Form from "react-bootstrap/Form";
import { useState } from "react";
import "../styles/ConnexionMedecin.css";
import { Link } from "react-router-dom";

export default function ModifierPatient() {
  const [patient, setPatient] = useState({
    nom: "",
    prenom: "",
    maladie: "",
    traitement: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await fetch.put("api", patient);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <h2>Modifier</h2>
      <div className="form_modification">
        <Form.Control
          type="text"
          placeholder="Modifier le nom "
          name="nom"
          value={patient.nom}
          onChange={handleChange}
        />
        <br />
        <Form.Control
          type="text"
          name="prenom"
          value={patient.prenom}
          placeholder="modifier le prénom "
          onChange={handleChange}
        />
        <br />
        <Form.Control
          type="text"
          name="maladie"
          value={patient.maladie}
          placeholder=" Modifier Maladie"
          onChange={handleChange}
        />

        <br />
        <Form.Control
          type="text"
          name="traitement"
          value={patient.traitement}
          placeholder="Modifier le traitement"
          onChange={handleChange}
        />

        <br />
        <button onClick={handleClick}>Valider les Modifications </button>
        {error && <p>Erreur lors de la modification</p>}
      </div>
      <div className="link">
        <Link to="/">Voir tous les patient</Link>
      </div>
    </>
  );
}
