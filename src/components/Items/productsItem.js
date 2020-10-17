import React, { Component } from "react";
import "./items.css";
import * as Message from "../constants/Message"

class productsItem extends Component {
  showRating(rating) {
    var result = [];
    for (var index = 1; index <= rating; index++) {
      result.push(<i key={index} className="las la-star uk-text-primary"></i>);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j + index} className="las la-frown"></i>);
    }
    return result;
  }
  onAddToCard = (product) => {
    this.props.onAddToCard(product);
    var msg = 'Thêm ';
    this.props.onChangeMessage(msg.concat(this.props.product.name).concat(Message.MSG_ADD_CARD_SUCCESS))
  }
  render() {
    var { product } = this.props;
    return (
      <div>
        <div className="uk-card uk-card-default uk-box-shadow-large uk-border-rounded">
          <div className="uk-card-media-top image">
            <img
              src={product.image}
              alt={product.name}
              className="uk-background-cover uk-background-container img-product"
            />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-text-bold">{product.name}</h3>
            <p>{product.decription}</p>
            <div className="uk-align-center uk-float-center">
              <ul className="uk-flex uk-flex-inline uk-list uk-list-collapse uk-flex-center">
                <li>{this.showRating(product.rating)}</li>
              </ul>
            </div>
            <hr />
            <div className="uk-text-left">
              <p className="uk-h3">{product.price} $</p>
            </div>
            <div className="uk-text-right">
              <div 
              className="uk-text-while icon-pay"
              onClick={ () => this.onAddToCard(product)}
              >
                <i className="las la-shopping-cart la-md uk-border-circle uk-padding-small uk-box-shadow-large uk-box-shadow-hover-medium"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default productsItem;
