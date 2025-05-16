import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Projects from "../../data/projects.json";

function Project() {
  const { id } = useParams();
  const Project = Projects.find((item) => item.id === id);

  if (!Project) {
    return <Navigate to="/Error" />
  }

  return (
    <main className="main-project">
      <section className="section-one">
        <div className="title-link">
          <h3 className="project-title">{Project.subtitle}</h3>
          <p>Code sur <a href={Project.link} target="_blank">Github</a></p>
        </div>
        <Carrousel pictures={Project.pictures} />
        <p className="description-title">Description</p>
        <p className="text">{Project.description}</p>
        <p className="technology-title">Technologies utilisées</p>
        <ul className="technology-list">
          {Project.technology.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>
      <section className="section-two">
        <h3 className="second-title">CE QUE J'AI APPRIS</h3>
        <p>{Project.conclusion}</p>
      </section>
      <div className="formation">
        <p>Projet réalisé dans le cadre d'une formation Openclassrooms</p>
        <img src="/Logo_OpenClassrooms.png" alt="Logo Openclassrooms" />
      </div>
    </main>
  );
};

export default Project