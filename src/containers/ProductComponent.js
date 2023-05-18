import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeSelectedProduct } from "./redux/actions/productActions";

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products.products);
    const dispatch = useDispatch();
    const [hoveredProductId, setHoveredProductId] = useState(null);

    if (!products) {
        return <p id="loading-item">
            <i className="trans">L</i>
            <i className="trans">o</i>
            <i className="trans">a</i>
            <i className="trans">d</i>
            <i className="trans">i</i>
            <i className="trans">n</i>
            <i className="trans">g</i>
            <i className="trans">.</i>
            <i className="trans">.</i>
            <i className="trans">.</i>
        </p>;
    }

    const handleMouseEnter = (productId) => {
        setHoveredProductId(productId);
    };

    const handleMouseLeave = () => {
        setHoveredProductId(null);
    };

    const renderList = products.map(product => {
        const { brandName, id, name, price, url, imageUrl, additionalImageUrls } = product;
        const isHovered = id === hoveredProductId;
        return (
            <Link
                to={`/product/${id}`}
                key={id}
            >
                <div
                    className="product-container"
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={`https://${isHovered && additionalImageUrls ? additionalImageUrls[0] : imageUrl}`}
                        alt={brandName}
                        className="product-image"
                        onClick={() => { dispatch(removeSelectedProduct()) }}
                    />
                    <div
                        className="product-description"
                        onClick={() => { dispatch(removeSelectedProduct()) }}
                    >
                        <div id="product-brand-name"><span>{name}</span></div>
                        <div id="product-price"><span>{price.current.text}</span></div>
                    </div>
                </div>
            </Link>
        )
    })
    return <>{renderList}</>
}

export default ProductComponent;