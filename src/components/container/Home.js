import React from "react";

import products from "../data/products";
import { Row, Col } from "reactstrap";
import Product from "./Product";
const Home = () => {
  
  return (
    <Row>
      {products.map((product) => (
        <Col className="mt-4" sm="12" md="6" lg="4" xl="3">
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Home;
