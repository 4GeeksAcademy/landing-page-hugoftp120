
const Card = (props) => {
    const infoCard = props.cardInfo;
    console.log(props)

    return (
        <>
            <div className="mt-5 col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="card">
                    <div className="ratio ratio-4x3 overflow-hidden rounded">
                        <img
                            src={infoCard.imgUrl}
                            alt="..."
                            style={{ objectFit: "cover" }} />
                    </div>
                    <div className="card-body">
                        <h3 className="text-center">{infoCard.title}</h3>
                        <p>{infoCard.text}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card