
const Card = (props) => {
    console.log(props)

    
    return (   
         
            <div className="card" style={{ width: "40rem" }}>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
    )
}
export default Card