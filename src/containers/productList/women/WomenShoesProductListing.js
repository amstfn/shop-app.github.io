import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "../../ProductComponent";
import axios from "axios";
import { setProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
import './womenStyles.css';
import MenuMobile from "../MenuMobile";

const options = {
    method: 'GET',
    url: 'https://asos2.p.rapidapi.com/products/v2/list',
    params: {
        store: 'US',
        offset: '0',
        categoryId: '27388',
        limit: '48',
        country: 'US',
        sort: 'pricedesc',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US'
    },
    /* headers: {
        'X-RapidAPI-Key': '5ed9798687msh2cf05279777059ep17d229jsnff46a1571156',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    } */
    headers: {
        'X-RapidAPI-Key': '5ed9798687msh2cf05279777059ep17d229jsnff46a1571156',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
};

const WomenShoesProductListing = () => {
    const dispatch = useDispatch()
    const [hoverMouseMen, setHoverMouseMen] = useState(false);
    const [hoverMouseWomen, setHoverMouseWomen] = useState(false);
    const [menu, setMenu] = useState(false);

    function displayMenu() {
        menu ? setMenu(false) : setMenu(true);
    }

    function handleMouseEnter(on) {
        setHoverMouseMen(on)
    }

    function handleMouseRemove(off) {
        setHoverMouseMen(off)
    }

    function handleMouseEnterWomen(on) {
        setHoverMouseWomen(on)
    }

    function handleMouseRemoveWomen(off) {
        setHoverMouseWomen(off)
    }

    const handleReloadPage = () => {
        console.log("hello")
        window.location.reload();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                dispatch(setProducts(response.data))
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="womenListContainer">
            {menu
                ? <MenuMobile display={displayMenu} />
                : <div id="mobile-category-list" onClick={() => { displayMenu() }}>
                    <span className="glyphicon glyphicon-option-vertical fa-3x"></span>
                </div>
            }
            <h1 id="asos-brand" className="women-h1"><Link to="/">asos</Link></h1>
            <div className="list-of-category">
                <div
                    onMouseEnter={() => handleMouseEnter(true)}
                    onMouseLeave={() => handleMouseRemove(false)}
                    className="men-word-in-women-page"
                    style={hoverMouseMen ? { backgroundColor: "#d5d5d5", color: "#212121" } : { backgroundColor: "inherit" }}
                >
                    <Link to="/men/category">
                        MEN
                    </Link>
                    <div
                        className="men-category-list-bar"
                        style={hoverMouseMen ? { display: "flex", backgroundColor: "#d5d5d5", color: "#212121" } : { display: "none" }}
                        onMouseEnter={() => handleMouseEnter(true)}
                        onMouseLeave={() => handleMouseRemove(false)}
                    >
                        <Link onClick={() => { dispatch(setProducts([])) }} to="/men/shoes" className="hover-color categories-name-in-list-shoes">Shoes</Link>
                        <Link onClick={() => { dispatch(setProducts([])) }} to="/men/accessories" className="hover-color categories-name-in-list-accessories">Accessories</Link>
                    </div>
                </div>
                <div
                    onMouseEnter={() => handleMouseEnterWomen(true)}
                    onMouseLeave={() => handleMouseRemoveWomen(false)}
                    className="women-word-in-women-page"
                    style={hoverMouseWomen ? { backgroundColor: "#d5d5d5", color: "#212121" } : { backgroundColor: "inherit" }}
                >
                    <Link to="/women/category">
                        WOMEN
                    </Link>
                    <div
                        className="women-category-list-bar"
                        style={hoverMouseWomen ? { display: "flex", backgroundColor: "#d5d5d5", color: "#212121" } : { display: "none" }}
                        onMouseEnter={() => handleMouseEnterWomen(true)}
                        onMouseLeave={() => handleMouseRemoveWomen(false)}
                    >
                        <Link onClick={() => { handleReloadPage() }} to="/women/shoes" className="hover-color categories-name-in-list-shoes">Shoes</Link>
                        <Link onClick={() => { dispatch(setProducts([])) }} to="/women/accessories" className="hover-color categories-name-in-list-accessories">Accessories</Link>
                    </div>
                </div>
            </div>
            <div className="product-list">
                <ProductComponent />
            </div>
        </div>
    )
}

export default WomenShoesProductListing