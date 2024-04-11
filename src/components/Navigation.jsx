import "../styles/Navigation.css";
import axios from "axios"
import { Link } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/lo9o.png";



function Navigation() {

  const [userId, setUserId] = useState(localStorage.getItem('id_medecin')); // Récupérer l'ID de l'utilisateur depuis le localStorage 
  const [user, setUser] = useState(null);

   // Fonction pour enregistrer les informations de l'utilisateur dans le localStorage
   const storeUserInfo = (userId) => {
    localStorage.setItem('id_medecin', userId);
  };

  // Fonction pour supprimer les informations de l'utilisateur du localStorage
  const removeUserInfo = () => {
    localStorage.removeItem('id_medecin');
  };

  // Fonction pour récupérer les informations de l'utilisateur
  const getUserInfo = async () => {
    try {
      const response = await axios.get('http://localhost:8000/medecin/' + userId); // Remplacez userId par l'ID de l'utilisateur connecté
      const userData = response.data;
      console.log("id_medecin " + userId);
      console.log("lien " + 'http://localhost:8000/medecin/' + userId);
      console.log("userdata:", userData);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Enregistrer les informations de l'utilisateur dans le localStorage
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userId) {
      getUserInfo();
    }
  }, [userId]);

  const Deconnexion = async () => {
    try {
      await axios.get('http://localhost:8000/medecin/logout');
      removeUserInfo(); // Supprimer les informations de l'utilisateur du localStorage lors de la déconnexion
      setUserId(null);
      setUser(null);
      alert('Déconnexion réussie');
      // Rediriger l'utilisateur vers la page de connexion
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Une erreur s\'est produite lors de la déconnexion');
    }
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navigation" style={{width: "100vw"}}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          {user ? ( // Si l'utilisateur est connecté}
          <Nav className="me-auto">
            <div className="lien-nav">
              <Nav.Link href="/patient-list">Mes patients</Nav.Link>
              <Nav.Link href="/createPatient">Nouveau patient</Nav.Link>
              <Nav.Link href="#si admin">liste medecins</Nav.Link>
              <Nav.Link href="#si admin">liste patients</Nav.Link>
            </div>

            <div className="user-info">
              <Nav.Link href={"/medecin/" + user.id}>
                {user.nom} {user.prenom}
              </Nav.Link>
              <Button variant="secondary" onClick={Deconnexion}>
                Déconnexion
              </Button>
            </div>            
          </Nav>

          ) : (
            <></>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
