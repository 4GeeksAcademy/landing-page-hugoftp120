
import {truncate} from "../Truncate";
const Card = (props) => {
    const infoCard = props.cardInfo;
    console.log(props)

    return (
        <>
            <div className="mt-5 col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="card h-100">
                    <div className="ratio ratio-4x3 overflow-hidden rounded">
                        <img
                            src={infoCard.imgUrl}
                            alt="..."
                            style={{ objectFit: "cover" }} />
                    </div>
                    <div className="card-body">
                        
                        <h5 className="text-center">{infoCard.title}</h5>
                        <p title={infoCard.text}>{truncate(infoCard.text)}</p>
                        {/*  //display-# para agrandar iconos(de foutawesome) y text fs-[1-5]tamaños pequeño en adelante mejor display-[1-5] */}
                    </div>
                    <div className="card-footer d-flex justify-content-center border-0 bg-white">
                        <button className="btn btn-primary">click here</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card