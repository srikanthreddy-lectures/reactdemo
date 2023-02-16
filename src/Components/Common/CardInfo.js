function CardInfo({c,t,title}) {
    let cc=`card ${c} ${t} h-100`
    return (

        <div className={cc}>
            <div className="card-body py-5">{title}</div>
            <div className="card-footer d-flex">
                View Details
                <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                </span>
            </div>
        </div>
    )
}

export default CardInfo;