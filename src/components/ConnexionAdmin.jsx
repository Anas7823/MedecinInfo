import "../styles/ConnexionMedecin.css";
import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../assets/lo9o.png";

function ConnexionAdmin() {
  const [userId, setUserId] = useState(localStorage.getItem("id")); // Récupérer l'ID de l'utilisateur depuis le localStorage
  const [user, setUser] = useState(null);

  // Fonction pour enregistrer les informations de l'utilisateur dans le localStorage
  const storeUserInfo = (userId) => {
    localStorage.setItem("id", userId);
  };

  // Fonction pour supprimer les informations de l'utilisateur du localStorage
  const removeUserInfo = () => {
    localStorage.removeItem("id");
  };

  // Fonction pour se connecter
  const Connecter = async (e) => {
    e.preventDefault();
    const identifiant = e.target.elements.identifiant.value;
    const mdp = e.target.elements.mdp.value;
    console.log(identifiant, mdp);

    try {
      const response = await axios.post(`http://localhost:8000/admin/login`, {
        identifiant: identifiant,
        mdp: mdp,
      });
      const { id: userId } = response.data; // Assuming the user ID is included in the response data
      setUserId(userId);
      storeUserInfo(userId); // Enregistrer l'ID de l'utilisateur dans le localStorage
      console.log("userId " + userId);
      alert(`Connexion réussie ! Bienvenue ${identifiant} !`);
      window.location.href = "/liste-medecin";
    } catch (error) {
      alert("Identifiant ou mot de passe incorrect.");
      console.error(error);
    }
  };

  return (
    <>
      <img className="logo" src={logo} alt="" />
      <h1>
        Connexion <span style={{ color: "red" }}>administrateur</span>
      </h1>
      <Form className="form_connexion_medecin" onSubmit={Connecter}>
        <Form.Group className="mb-3" controlId="identifiant">
          <Form.Label>Identifiant</Form.Label>
          <Form.Control
            type="text"
            name="identifiant"
            placeholder="Entez votre identifiant..."
          />
          <Form.Text className="text-muted">
            Bienvenue ! Veuillez vous connecter pour continuer.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mdp">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            name="mdp"
            placeholder="Entrez votre mot de passe..."
          />
        </Form.Group>

        <Button variant="primary w-100" type="submit">
          Connexion
        </Button>
      </Form>
    </>
  );
}

export default ConnexionAdmin;
