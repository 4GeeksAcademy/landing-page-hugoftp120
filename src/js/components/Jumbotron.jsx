
const Jumbotron = (props) => {
    console.log(props)
    return (
        <div>
            <div className="card text mt-5 rounded-5 overflow-hidden"> {/*overflow*/}
                <img src={props.imageUrl} className="object-fit-cover" style={{ height: "30rem" }} alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end w-50">
                    <h5 className="card-title display-1 mb-3 jumbotron-title">Escuela de Surf</h5>
                    <p className="card-text">El surf es un deporte emocionante y desafiante que atrae a millones 
                        de personas en todo el mundo. Aprender a surfear puede ser una experiencia gratificante 
                        y enriquecedora, y una escuela de surf es el lugar ideal para comenzar este viaje.
                        En este artículo, exploraremos qué es una escuela de surf, los beneficios de aprender 
                        a surfear, qué se enseña en estas escuelas y cómo elegir la mejor escuela para tus 
                        necesidades.</p>
                    <p className="card-text"><small></small></p>
                </div>
            </div>
        </div>
    )
}
export default Jumbotron 