import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

export default class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  };
  render() {
    this.handleDetail = () => {
      console.log("Detail");
    };
    this.addToCart = () => {
      console.log("Add to cart");
    };
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
