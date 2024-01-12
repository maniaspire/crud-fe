import { FunctionComponent } from "react";
import './header.css';
import { Link } from "react-router-dom";

interface HeaderComponentProps {

}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = () => {
    return (<>
        <div className="header-container">
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <Link to='/list-user'>Crud</Link>
                    </div>
                    <ul className="menu">
                        <li><Link to='/list-user'>Home</Link></li>
                        <li><Link to=''>About</Link></li>
                        <li><Link to=''>Category</Link></li>
                        <li><Link to=''>Contact</Link></li>
                        <li><Link to=''>Feedback</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </>);
}

export { HeaderComponent }