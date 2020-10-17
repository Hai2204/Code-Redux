import React, { Component } from "react";
import "./pay.css";

class pay extends Component {
  render() {
    var colorTable = {
      color: "purple",
    };
    return (
      <div className="uk-overflow-auto">
        <hr className="uk-divider-icon" />
        <table className="uk-table uk-table-divider tb-pay uk-padding ">
          <thead>
            <tr className="uk-text-center">
              <th></th>
              <th style={colorTable}>Sản Phẩm</th>
              <th style={colorTable}>Giá</th>
              <th style={colorTable}>Số Lượng</th>
              <th style={colorTable}>Tổng Cộng</th>
            </tr>
          </thead>
          <tbody uk-sortable="handle: tr">{this.props.children[0]}</tbody>
        </table>
        <hr />
        {this.props.children[1]}
      </div>
    );
  }
}

export default pay;
