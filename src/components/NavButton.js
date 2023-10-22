function NavButton(props) {
    return (
        <a href={props.href} className="nav-link">
            <button className="nav-button standard-button casual-text-color">{props.name}</button>
        </a>
    )
}

export default NavButton;