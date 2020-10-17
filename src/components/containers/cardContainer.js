import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartItems from "../cardItem/cartItems";
import Cart from "../table/cart";
import * as Message from "../constants/Message";
import CartResults from "../cartResults/cartResults";
import { removeCard, actionChangeMessage, upDateQuantity } from "../actions/index"

class cardContainer extends Component {
  render() {
    var { card, totalPrice } = this.props;
    return (
      <Cart>
        {this.showCardItems(card)}
        {this.showCardTotalItem(totalPrice)}
      </Cart>
    );
  }
  showCardTotalItem = (totalPrice) => {
    var result = null;
    if (totalPrice.length > 0) {
      result = <CartResults totalPrice={totalPrice} />;
    }
    return result;
  };
  showCardItems = (card) => {
    var {onDeleteCard, onChangeMessage, onUpDateProductInCard} = this.props;
    var result = (
      <tr>
        <td>{Message.EMPTY}</td>
      </tr>
    );
    if (card.length > 0) {
      result = card.map((item, index) => {
        return <CartItems key={index} item={item} index={index} onDeleteCard={onDeleteCard} onChangeMessage={onChangeMessage} onUpDateProductInCard={onUpDateProductInCard}/>;
      });
    }
    return result;
  };
}
cardContainer.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        decription: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
      onDeleteCard : PropTypes.func.isRequired,
      onChangeMessage : PropTypes.func.isRequired,
      onUpDateProductInCard : PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
  return {
    card: state.card,
    totalPrice: state.card,
  };
};
const mapdispatchToProps = (dispatch , props) => {
  return {
    onDeleteCard : (product) => {
      
      dispatch(removeCard(product))
    },
    onChangeMessage: (message) => {
      dispatch(actionChangeMessage(message));
    },
    onUpDateProductInCard: (product, quantity) => {
      dispatch(upDateQuantity(product,quantity))
    }   
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(cardContainer);
