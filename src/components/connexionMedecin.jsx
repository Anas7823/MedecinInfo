// import '../styles/App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ConnexionMedecin() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="identifiant">
        <Form.Label>Identifiant</Form.Label>
        <Form.Control type="identifiant" placeholder="Entez votre identifiant..." />
        <Form.Text className="text-muted">
          Bienvenue ! Veuillez vous connecter pour continuer.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="mdp">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="mdp" placeholder="Entrez votre mot de passe..." />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Connexion
      </Button>
    </Form>
    </>
  )
}

export default ConnexionMedecin
