import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="navbar_color navbar navbar-expand-lg ">
        <div className="container-fluid ">
            <Link to="/" className="navbar_decoration">
            <h1 className="navbar-icon">Reina Batata</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item space_item">
                        <button className="nav-link" href="">Barbijos</button>
                    </li>
                    <li className="nav-item space_item">
                        <button className="nav-link" href="">Almohadones</button>
                    </li>
                    <li className="nav-item space_item">
                        <button id="btnCarrito" className="nav-link btn-carrito" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                                <CartWidget quantity={0}/>
                            </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar