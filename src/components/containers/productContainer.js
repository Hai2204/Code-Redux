import React, { Component } from "react";
import Products from "../products/products";
import Product from "../Items/productsItem"
import PropTypes from "prop-types";
import { addToCard, actionChangeMessage } from "../actions/index"
import { connect } from "react-redux";

class productContainer extends Component {
    showProducts = (products) => {
        var result = null;
        var {onAddToCard, onChangeMessage} = this.props
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                key={index+1} 
                product={product} 
                onAddToCard={onAddToCard}
                onChangeMessage={onChangeMessage}
                />;
            });
        }
        return result
      }

  render() {
    var { products } = this.props;
    return (
    <Products>
        { this.showProducts(products) }
    </Products>
    )
  }
}
productContainer.propTypes  = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            decription: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        }),
        
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onAddToCard : PropTypes.func.isRequired
} 
const mapStateToProps = state => {
    return {
        products : state.products
       }
}
const mapdispatchToProps = (dispatch , props) => {
    return  {
        onAddToCard: (product) => {
            dispatch(addToCard(product, 1))
        }
        ,
        onChangeMessage: (message) => {
            dispatch(actionChangeMessage(message));
        }   
    }
}


export default connect(mapStateToProps, mapdispatchToProps)(productContainer);
