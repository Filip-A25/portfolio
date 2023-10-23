function TechItem(props) {
    return (
        <div className="technologies-item">
            <img src={props.src} className="tech-item-img"></img>
            <h2 className="tech-item-name">{props.name}</h2>
            <span className="tech-item-desc">{props.descText}</span>
        </div>
    )
}

export default TechItem;