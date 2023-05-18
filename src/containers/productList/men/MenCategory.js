import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";

const MenCategory = () => {

    const dispatch = useDispatch();

    return (
        <div className="men-category-container">
            <h1 id="asos-brand" className="menCategory-h1"><Link to="/">asos</Link></h1>
            <div className="men-category-list">
                <Link onClick={() => {dispatch(setProducts([]))}} to="/men/shoes"><img className="menCategory-imageModel-shoe" src="https://images.asos-media.com/products/thomas-crick-wide-fit-woven-tassel-loafer-in-tan-leather/204118259-2?$n_640w$&wid=634&fit=constrain" alt="shoe-picture" /></Link>
                <Link onClick={() => {dispatch(setProducts([]))}} to="/men/accessories"><img className="menCategory-imageModel-accessory" src="https://images.asos-media.com/products/asos-design-3-pack-waterproof-stainless-steel-band-ring-set-in-silver-tone/200564434-1-silver?$n_640w$&wid=513&fit=constrain" alt="accessory-model" /></Link>
            </div>
        </div>
    )
}

export default MenCategory;