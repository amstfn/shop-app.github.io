import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "./redux/actions/productActions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useSwipeable } from "react-swipeable"

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://asos2.p.rapidapi.com/products/v3/detail?id=${productId}&currency=USD&sizeSchema=US&store=US&lang=en-US`,
          {
            /* headers: {
              'X-RapidAPI-Key': 'e8ef7c5788msh28f3d99548f90f7p18686fjsn88312ef9d9fd',
              'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            } */
            /* headers: {
              'X-RapidAPI-Key': '5ed9798687msh2cf05279777059ep17d229jsnff46a1571156',
              'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            } */
            headers: {
              'X-RapidAPI-Key': '5ed9798687msh2cf05279777059ep17d229jsnff46a1571156',
              'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
          }
        );
        console.log(response.data);
        dispatch(selectedProduct(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const product = useSelector((state) => state.product);
  const { name, description, price, media } = product || {};

  const sanitizedDescription = DOMPurify.sanitize(description);

  const detailImages = media && media.images ? media.images : [];
  const detailImagesArr = detailImages.map((img) => img.url);

  const handlePrevImage = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? detailImagesArr.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setIndex((prevIndex) => (prevIndex === detailImagesArr.length - 1 ? 0 : prevIndex + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => handleNextImage(),
    onSwipedRight: (eventData) => handlePrevImage()
  })

  return (
    <div className="product-detail-container" key={name}>
      <h1 className="first-page-h1">
        <Link to="/" id="asos-brand">
          asos
        </Link>
      </h1>
      <Link className="back-button" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-return-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </Link>
      <div className="img-desc-container">
        <div className="detail-image-container">
          <span className="glyphicon glyphicon-chevron-left fa-4x icon-green display-mobile" onClick={handlePrevImage}></span>
          {detailImagesArr.length > 0 ? (
            <img {...handlers} className="detail-image" src={`https://${detailImagesArr[index]}`} alt="Product" />
          ) : (
            <p id="loading-item-detail">
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
            </p>
          )}
          <span className="glyphicon glyphicon-chevron-right fa-4x icon-green display-mobile" onClick={handleNextImage}></span>
        </div>
        <div className="detail-description" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
      </div>
    </div>
  );
};

export default ProductDetail;
