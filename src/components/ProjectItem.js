function ProjectItem(props) {
    return (
        <a href={props.href}>
            <div className="project-item-container">
                <div className="pi-img">
                    <img className="proj-img" src={props.src}></img>
                    <div className="pi-logo-section">
                        <section className="pi-ls-header">
                            <span>Technologies used</span>
                        </section>
                        <section className="pi-ls-images">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"></img>
                        </section>
                    </div>
                    <h3 className="pi-name">{props.name}</h3>
                </div>
                <section className="pi-text">
                    <p>
                        {props.descText}
                    </p>
                </section>
            </div>
        </a>
    )
}

export default ProjectItem;