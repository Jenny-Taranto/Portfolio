
function Card({ cover, title }) {
    return (
        <div className="card">
            <img src={cover} alt={title} className="cover" />
            <p>{title}</p>
            <img src="/Logo_OpenClassrooms.png" alt="Logo Openclassrooms" className="logooc" />
            <div className="card__text">VOIR FICHE</div>
        </div>
    )
}

export default Card