import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <main className="main-error">
      <span>404</span>
      <img src="/error.png" alt="Ordinateur cassé"/>
      <p>On dirait que cette page n'existe pas.</p>
      <p>Désolée !</p>
      <NavLink to='/'>Retourner à l'accueil</NavLink>
    </main>
  );
};

export default Error