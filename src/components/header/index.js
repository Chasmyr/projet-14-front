import { Link } from "react-router-dom"
import './index.css'

const Header = () => {

    return (
        <div className="header-wrapper">
            <h1 className="header-title">HRnet</h1>
            <div className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/list">Employee List</Link>
            </div>
        </div>
    )
}

export default Header