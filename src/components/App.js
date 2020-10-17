import React from "react";
import "./App.css";
import Header from "./header/header";
import ProductContainer from "./containers/productContainer";
import MessageContainer from "./containers/messageContainer";
import CardContainer from "./containers/cardContainer";
import Footer from "./footer/footer";

function App() {
  var widthMess = {
    maxWidth: 500,
    width: "auto",
    marginRight: 18
  }
  return (
    <div>
      <Header />
      <div className="uk-container uk-section">
        <div className="uk-text-center">
          <h1>Danh Sách Sản Phẩm</h1>
        </div>
      </div>
      <ProductContainer />
      <div className="uk-margin-left" style={widthMess}>
        <MessageContainer />
      </div>
      <div className="uk-container uk-section">
        <div className="uk-text-center">
          <CardContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
