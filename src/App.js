import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/container/Home";
import Contact from "./components/container/Contact";
import { Container } from "reactstrap";
import ProductDetails from "./components/container/ProductDetails";
const App = () => {
  return (
    <Router>
      <Header />

      <Container fluid="sm">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
