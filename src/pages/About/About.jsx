import { Link, Element } from "react-scroll"
import ScrollButton from "../../components/ScrollButton/ScrollButton.jsx";

function About() {
  return (
    <main className="main-about">
      <h2>A propos</h2>
      <hr />
      <nav>
        <ul>
          <li><Link to="PRESENTATION" smooth={true} duration={500}>Présentation</Link></li>
          <li><Link to="PARCOURS" smooth={true} duration={500}>Parcours</Link></li>
          <li><Link to="COMPETENCES" smooth={true} duration={500}>Compétences</Link></li>
        </ul>
      </nav>
      <hr />
      <section>
        <Element name="PRESENTATION">
          <h3 className="title-about">PRESENTATION</h3>
          <p className="text">Enfant, j’appréciais déjà ce qui était lié au visuel : les images, les animations, les couleurs. J’ai grandi avec mon ordinateur, également attirée par l’informatique et son aspect technique, curieuse de comprendre comment les choses fonctionnent.</p>
          <p className="text">C’est dans ce contexte que j’ai décidé de me lancer dans le vaste domaine de la technologie, motivée par la volonté de créer depuis l’imagination et ma soif de connaissance.</p>
        </Element>
      </section>
      <section>
        <Element name="PARCOURS">
          <h3 className="title-about">PARCOURS</h3>
          <p className="text">Après un baccalauréat dit Littéraire, j’ai décidé de me rediriger vers la production graphique, en alternance dans une entreprise de P.A.O. J’ai eu, au sein d’une petite équipe, la chance de travailler sur des projets destinés au numérique, ainsi qu’à l’impression : traitement d’images, réalisation de packaging, de flyers, de catalogues. Cela m’a permis d’entrer enfin dans le monde de la création et du visuel.</p>
          <p className="text">J’ai ensuite décidé de plonger dans le monde si vaste du développement web, source d’apprentissage infinie avec ses nombreux langages. Je me suis lancée dans une formation qui n’a fait que confirmer que j’étais exactement là où je voulais être.</p>
          <p className="text">Aujourd’hui, j’ai à coeur de collaborer avec vous pour concrétiser vos projets qui, j’en suis certaine, sauront nous apporter à tous deux la satisfaction d’une idée bien réalisée.</p>
        </Element>
      </section>
      <section>
        <Element name="COMPETENCES">
          <h3 className="title-about">COMPETENCES</h3>
          <div className="visuals">
            <img src="/wordcloud.svg" alt="Nuage de mots" />
            <p className="quote">"" - Thomas Egain, mentor</p>
          </div>
        </Element>
        <ScrollButton />
      </section>
    </main>
  );
};

export default About