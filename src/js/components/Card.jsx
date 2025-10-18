
const Card = (props) => {
    console.log(props)

    
    return (   
         
            <div className="card" style={{ width: "40rem" }}>
                <div className="ratio ratio-4x3">
                <img src={props.imageUrl} className="object-fit-cover" alt="..." />
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
    )
}
export default Card