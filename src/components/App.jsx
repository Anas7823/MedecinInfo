import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from 'react';

import Navigation from "./Navigation.jsx";
import ConnexionMedecin from "./connexionMedecin.jsx";
import ConnexionAdmin from "./ConnexionAdmin.jsx";
import Patient from "./Patient.jsx";
import CreatePatient from "./CreatePatient.jsx";
import PatientList from "./PatientList.jsx";
import MedecinList from "./MedecinList.jsx";
import ModifierPatient from "./ModifierPatient.jsx";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ConnexionMedecin />} />
        <Route path="/connexion-admin" element={<ConnexionAdmin />} />
        <Route path="/patient-list" element={<PatientList />} />
        <Route path="/patient/:idPatient" element={<Patient />} />
        <Route path="/creer-patient" element={<CreatePatient />} />
        <Route path="/modifier-patient/:idPatient" element={<ModifierPatient />}
        />
        <Route path="/liste-medecin" element={<MedecinList />} />
        {/* <Route path="/nouveau-rdv/:idPatient" element={<Composant />} /> */}
      
      </Routes>
    </>
  );
}

export default App;
