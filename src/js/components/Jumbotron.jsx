
const Jumbotron = (props) => {
    console.log(props)
    return (
        <div>
            <div className="card text mt-5 rounded-5 overflow-hidden"> {/*overflow*/}
                <img src={props.imageUrl}  className="object-fit-cover" style={{height:"30rem"}} alt="..." />
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