
const Card = () => {
    const imgUrl = "https://media.istockphoto.com/id/2065673896/es/foto/rolling-dice-macro.jpg?s=612x612&w=0&k=20&c=gw61Xz6R9WUx65dUqmSErimq5ezPeHeEB-3AkYqpCEk=";

    return (
        <div>
            <div className="card" style={{ width: "20rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
        </div>
    )
}
export default Card