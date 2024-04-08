import '../styles/App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import ConnexionMedecin from './connexionMedecin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ConnexionMedecin />} />
        {/* <Route path="/liste-patients" element={<Composant />} /> */}
        {/* <Route path="/patient/:idPatient" element={<Composant />} /> */}
        {/* <Route path="/creer-patient" element={<Composant />} /> */}
        {/* <Route path="/modifier-patient/:idPatient" element={<Composant />} /> */}
        {/* <Route path="/nouveau-rdv/:idPatient" element={<Composant />} /> */}
        {/* <Route path="/connexion-admin" element={<Composant />} /> */}
        {/* <Route path="/inscription-admin" element={<Composant />} /> */}
        {/* <Route path="/liste-medecin" element={<Composant />} /> */}
      </Routes>
    </>
  )
}

export default App
