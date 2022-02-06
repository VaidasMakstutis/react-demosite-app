import "../css/header-nav.scss";
import { Link } from "react-router-dom";

const HeaderNav = () => {
    return (
        <nav className="header-nav">
            <ul>
                <Link to="/"><li className="dropdown"><button>home</button></li></Link>
                <Link to="/service"><li className="dropdown"><button>service</button></li></Link>
                <Link to="/works"><li className="dropdown"><button>works</button></li></Link>
                <Link to="/about-me"><li className="dropdown"><button>about me</button></li></Link>
                <Link to="/contact"><li className="dropdown"><button>contact</button></li></Link>
            </ul>
        </nav>
    );
};

export default HeaderNav;