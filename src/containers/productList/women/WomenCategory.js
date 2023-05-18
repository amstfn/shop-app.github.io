import React from "react";
import { Link } from "react-router-dom";
import './womenStyles.css';
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";

const WomenCategory = () => {

    const dispatch = useDispatch();

    return (
        <div className="women-category-container">
            <h1 id="asos-brand" className="womenCategory-h1"><Link to="/">asos</Link></h1>
            <div className="women-category-list">
                <Link onClick={() => {dispatch(setProducts([]))}} to="/women/shoes"><img className="womenCategory-imageModel-shoe" src="https://images.asos-media.com/products/asos-design-nobu-strappy-tie-leg-heeled-sandals-in-gold/202607250-2?$n_640w$&wid=634&fit=constrain" alt="shoe-picture" /></Link>
                <Link onClick={() => {dispatch(setProducts([]))}} to="/women/accessories"><img className="womenCategory-imageModel-accessory" src="https://images.asos-media.com/products/accessorize-denim-mini-washbag-with-embroidered-hearts/202410684-2?$n_640w$&wid=634&fit=constrain" alt="accessory-model" /></Link>
            </div>
        </div>
    )
}

export default WomenCategory;