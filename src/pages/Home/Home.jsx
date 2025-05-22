import Card from "../../components/Card/Card"
import projects from "../../data/projects.json"
import { Link } from "react-router-dom"
import ScrollButton from "../../components/ScrollButton/ScrollButton.jsx";

function Home() {
  return (
    <main className="main-home">
      <section className="first-section">
        <div>
          <h1>Jenny Taranto</h1>
          <h2>Développeuse web</h2>
          <p>Je donne forme aux rêves numériques</p>
          <input
            type="button" value="MON CV" onClick={() => window.open("/CV_2025-05-22_Jenny_TARANTO.pdf", "_blank")} />
        </div>
        <img src="/4102879_971 1.svg" />
      </section>
      <section className="second-section">
        <hr />
        <h2>R&Eacute;ALISATIONS</h2>
        <div className="cards">
          {projects.map(project => (
            <Link key={project.id} to={`/project/${project.id}`} >
              <Card key={project.id} cover={project.cover} title={project.title} />
            </Link>
          ))}
        </div>
        <h2>PROJETS PERSONNELS</h2>
        <p>Concevoir une application pour ma bibliothèque personnelle</p>
        <ScrollButton />
      </section>
    </main>
  );
};

export default Home