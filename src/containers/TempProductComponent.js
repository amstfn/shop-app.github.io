import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TempProductComponent = () => {

    const products = useSelector(state => state.allProducts.products)

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

    const renderList = products.map(product => {
        const { id, image, price, title } = product;
        return (

            <div key={id}>
                <Link to={`/product/${id}`}>
                    <div
                        className="product-container"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="product-image"
                        />
                        <div className="product-description">
                            <div id="product-brand-name"><span>{title}</span></div>
                            <div id="product-price"><span>{price}</span></div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return <>{renderList}</>
}

export default TempProductComponent;