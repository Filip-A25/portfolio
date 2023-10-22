import NavButton from "./NavButton";
import ProjectItem from "./ProjectItem";

function MainPage() {
    return (
        <div id="main-content">
            <nav id="navbar">
                <section className="nav-section nav-logo">
                    <h3>Portfolio</h3>
                </section>
                <section className="nav-section nav-buttons">
                    <NavButton
                        name="Home"
                        href="#"
                    />
                    <NavButton
                        name="Projects"
                        href="#proj-anchor"
                    />
                    <NavButton
                        name="Technologies"
                        href="#"
                    />
                    <NavButton
                        name="Contacts"
                        href="#"
                    />
                </section>
            </nav>
            <div className="frame top-frame"></div>
            <div className="frame left-frame"></div>
            
            <div className="home-page-section">
                <div className="hp-description-section hp-content-section">
                    <h1>Filip Agatić</h1>
                    <h4>Frontend developer</h4>
                    <section className="hp-desc-text">
                        <span>
                            Hello, my name is Filip Agatić and I'm a self-taught frontend developer.
                            On this page you'll be able to find some of my projects and technologies I've
                            used to create them. My contacts are listed at the very end of the page so feel
                            free to message me about any enquiries!
                        </span>
                    </section>
                    <section className="hp-contact-buttons">
                        <a href="https://github.com/Filip-A25" className="contact-button">
                            <img className="contact-button-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/filip-agatic/" className="contact-button">
                            <img className="contact-button-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"></img>
                        </a>
                    </section>
                </div>
                <div className="hp-image-section hp-content-section">
                    <div className="img-bg-overlay">
                        <div className="img-bg"></div>
                    </div>
                </div>
            </div>

            <div id="proj-anchor" className="projects-section">
                <section className="projects-section-header">
                    <h1>Projects</h1>
                </section>
                <section className="project-items">
                    <ProjectItem
                        name="FIRST PROJECT"
                        href="#"
                        src=""
                        descText="Curabitur cursus, erat eu suscipit tincidunt, ante nisi porta lacus, convallis facilisis elit est imperdiet ex."
                    />
                    <ProjectItem
                        name="SECOND PROJECT"
                        href="#"
                        src=""
                        descText="Maecenas nec blandit justo, a venenatis mauris. Ut volutpat in ex a tincidunt. Pellentesque id dignissim neque, a ullamcorper dolor."
                    />
                    <ProjectItem
                        name="THIRD PROJECT"
                        href="#"
                        src=""
                        descText="Etiam placerat lectus et nulla mattis, auctor accumsan sem vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
                    />
                </section>
            </div>
        </div>
    )
}

export default MainPage;