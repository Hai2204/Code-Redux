import React, { Component } from "react";

class message extends Component {
  render() {
    var { message} = this.props;
    return (
      <div className="uk-padding uk-text-bold uk-background-primary uk-text-while uk-border-rounded">
        {message}
      </div>
    );
  }
}

export default message;
