import React, { Component } from "react";

class cartResults extends Component {
    showTotalPrice = (totalPrice) => {
        var total = 0;
        if (totalPrice.length > 0) {
            for (var i = 0; i < totalPrice.length; i++) {
                total += totalPrice[i].product.price * totalPrice[i].quantity
            }
        }
        return total
    }
  render() {
    var { totalPrice } = this.props;
 
    return (
      <div>
        <div className="uk-margin uk-margin-large uk-float-right uk-text-center uk-width-1-2 uk-list uk-flex uk-flex-around uk-list-collapse">
          <h3 className="uk-text-bold">Tổng Tiền : </h3>
          <h3 className="uk-text-italic">{ this.showTotalPrice(totalPrice) }$</h3>
          <button className="uk-button uk-button-small uk-button-primary uk-text-while uk-border-rounder">
            Pay
          </button>
        </div>
      </div>
    );
  }
}

export default cartResults;
