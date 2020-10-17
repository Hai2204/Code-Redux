import React, { Component } from "react";
import * as Message from "../constants/Message"

class cartItems extends Component {
  showPriceTotal = (price, quantity) => {
    return price * quantity;
  };
  onDeleteCard = (product) => {
    var { onDeleteCard, onChangeMessage } = this.props;
    onDeleteCard(product);
    var msg = 'Xóa '
    onChangeMessage(msg.concat(product.name).concat(Message.MSG_DELETE_TO_CARD_SUCCESS))

  };
  upDateQuantity = (product , quantity) => {
    var {onChangeMessage, onUpDateProductInCard } = this.props
      if (quantity > 0) {
        onUpDateProductInCard(product, quantity)
        onChangeMessage(Message.MSG_UPDATE_TO_CARD_SUCCESS.concat(' ',quantity,' ', product.name))
      }

  }
  render() {
    var { item } = this.props;
    var { quantity } = item;
    return (
      <tr>
        <td uk-lightbox="true">
          <a href={item.product.image}>
            <img
              width="100"
              alt={item.product.name}
              className="uk-margin-right"
              src={item.product.image}
            ></img>
          </a>
        </td>
        <td>
          <i>{item.product.name}</i>
        </td>
        <td> {item.product.price} $</td>
        <td>
          {quantity}
          <div className="uk-button-group uk-border-rounder uk-margin-left">
            <button className="uk-button uk-button-small uk-button-secondary uk-text-while uk-border-rounder"
              onClick = { () => this.upDateQuantity(item.product , item.quantity - 1)}
            >
              -
            </button>
            <button className="uk-button uk-button-small uk-button-secondary uk-text-while uk-border-rounder"
            onClick = { () => this.upDateQuantity( item.product , item.quantity + 1)}
            >
              +
            </button>
          </div>
        </td>
        <td>{this.showPriceTotal(item.product.price, item.quantity)} $</td>
        <td>
          <button
            className="uk-button uk-button-small uk-background-muted"
            onClick={() => this.onDeleteCard(item.product)}
          >
            <i className="las la-times"></i>
          </button>
        </td>
      </tr>
    );
  }
}


export default cartItems;
