import "./Footer.css"

const Footer = () => {

    return(
        <footer className="footer">
        <div className="footer_item">
            <a className="footer_item-item" target="_blank" href="https://www.instagram.com/reinabatata.textiles/"><i
                    className="footer_item-icon fa-brands fa-instagram-square"></i>Seguinos</a>
        </div>
        <div className="footer_item">
            <a className="footer_item-item" href="mailto:reinabatata.textiles@gmail.com"><i
                    className="footer_item-icon fa-solid fa-envelope"></i>Contactenos</a>
        </div>
        <div className="footer_item">
            <a className="footer_item-item"><i className="footer_item-icon fa-solid fa-copyright"></i>2020-2022</a>
        </div>
    </footer>
    )
}

export default Footer