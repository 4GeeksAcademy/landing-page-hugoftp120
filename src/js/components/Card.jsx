
const Card = (props) => {
    console.log(props)
    
    
    return (
        <>
        <div className="col-md-3 mb-4">
            <div className="Card" style={{ width: "20rem" }}>
                <img src={props.imgUrl1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card