
const infoCard = props.cardInfo;
const Card = (props) => {
    console.log(props)

    
    return (   
        <> 
            <div className={infoCard.properties}>
                        <div className="card">
                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                            <img 
                            src={props.imageUrl} 
                            alt="..." 
                            style={{objectFit: "cover"}}/>
                        </div>
                        <div className="card-body">
                        </div>
                        </div>
            </div>
                            
        </>
    )
}
export default infoCard