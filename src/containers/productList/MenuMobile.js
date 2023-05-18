import { Link } from "react-router-dom"

const MenuMobile = (props) => {
    return (
        <div className="menu-container">
            <div className="menu-exit-button" onClick={() => { props.display() }}>
                <span className="glyphicon glyphicon-remove fa-2x"></span>
            </div>
            <Link to="/men/category"><p className="word-menAndWomen">Men</p></Link>
            <ul className="categories-name-mobile">
                <li><Link to="/men/shoes">Shoes</Link></li>
                <li><Link to="/men/accessories">Accessories</Link></li>
            </ul>
            <Link to="/women/category"><p className="word-menAndWomen">Women</p></Link>
            <ul className="categories-name-mobile">
                <li><Link to="/women/shoes">Shoes</Link></li>
                <li><Link to="/women/accessories">Accessories</Link></li>
            </ul>
        </div>
    )
}

export default MenuMobile;