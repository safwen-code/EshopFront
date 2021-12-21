import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const {
    id,
    titel,
    image,
    description,
    brand,
    category,
    price,
    countInStock,
    rating,
    newReviews,
  } = product;

  return (
    <Card>
      <CardImg alt="Card image cap" src={image} top width="50%" height="50%" />
      <CardBody>
        <CardTitle tag="h5">{product.titel}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {brand}
        </CardSubtitle>
        <CardText>{description}</CardText>
        <CardText>
          <Rating value={rating} text={newReviews} />
        </CardText>
        <CardText>${price}</CardText>
      </CardBody>

      <Link to={`/product/${id}`} className="text-center">
        <Button color="info">more detail</Button>
      </Link>
    </Card>
  );
};

export default Product;
