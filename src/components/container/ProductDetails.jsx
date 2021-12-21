import React, { Fragment } from "react";
import products from "../data/products";
import { useParams } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  CardImg,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <Fragment>
      <div className="mt-3 mb-3">
        <Link to="/">
          <Button color="light">Go Back</Button>
        </Link>
      </div>
      <Row>
        <Col md={6}>
          <CardImg alt={product.titel} src={product.image} top width="100%" />
        </Col>
        <Col md={3} className=" mt-3">
          <ListGroup flush>
            <ListGroupItem>
              <h2>{product.titel}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.newReviews}`} />
            </ListGroupItem>
            <ListGroupItem>price : ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3} className=" mt-3">
          <ListGroup>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>
              {product.contInstock > 0
                ? `product is in stack ${product.contInstock}`
                : "Is Out In Stack"}
            </ListGroupItem>
            <ListGroupItem>
              <Button color="secondary" disabled={product.contInstock === 0}>
                Add To Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductDetails;
