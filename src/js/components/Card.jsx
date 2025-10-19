
const Card = (props) => {
    console.log(props)

    
    return (   
        <div className="mt-5 col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div className="card">
                        <div className="ratio ratio-4x3">
                            <img src={props.imageUrl} alt="..." />
                        </div>
                        <div className="card-body">
                        </div>
                    </div>
                    </div>
                            
    )
}
export default Card