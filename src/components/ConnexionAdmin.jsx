import "../styles/ConnexionMedecin.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../assets/lo9o.png";

function ConnexionAdmin() {
  return (
    <>
      <img className="logo" src={logo} alt="" />
      <h1>Connexion Administrateur</h1>
      <Form className="form_connexion_medecin">
        <Form.Group className="mb-3" controlId="identifiant">
          <Form.Label>Identifiant</Form.Label>
          <Form.Control
            type="identifiant"
            placeholder="Entez votre identifiant..."
          />
          <Form.Text className="text-muted">
            Bienvenue ! Veuillez vous connecter pour continuer.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mdp">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="mdp" placeholder="Entrez votre mot de passe..." />
        </Form.Group>

        <Button variant="primary w-100" type="submit">
          Connexion
        </Button>
      </Form>
    </>
  );
}

export default ConnexionAdmin;
