import React, { Component } from "react";

class products extends Component {
  render() {
    return (
      <div className="uk-container uk-section">
        <div className="uk-text-center">
          <div
            className="uk-child-width-1-3@m uk-child-width-1-1@s"
            uk-grid="true"
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default products;
