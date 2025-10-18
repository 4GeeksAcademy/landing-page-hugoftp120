
const Jumbotron = (props) => {
    console.log(props)
    return (
        <div>
            <div className="card text">
                <img src={props.imageUrl}  className="card-img-jumbo" style={{width:"rem 50"}} alt="..." /> //no me aplica el cambio de tamaño
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}
export default Jumbotron 