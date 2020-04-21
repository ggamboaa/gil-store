import React, { Component } from 'react';
import { ProductConsumer } from '../context';

import Product from './Product';
import Title from './Title';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 16*: 5=3, 4=1.5, 3=16, 2=.5, 1=.25, 0=0 */}
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {/* Return the value that's on ProductContext.Provider */}
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product}/>;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
