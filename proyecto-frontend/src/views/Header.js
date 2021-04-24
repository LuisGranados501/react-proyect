import { Link } from "react-router-dom";
import image from '../images/3pillar.jpg';

function Header(props) {
    return (
        <div className="wrapper-bottom-header">
            <div className="wrapper-bottom-header2">
                <div className="main-logo">
                    <img width="60px" height="55px" className="main-img-logo" src={image} alt="3PillarGlobal..."/>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;