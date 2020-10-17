import React, { Component } from "react";
import "../table/pay.css";

class footer extends Component {
  render() {
    return (
<div>
  <footer>
    <div className="uk-background">
      <nav className="uk-container uk-padding" uk-navbar="true">
        <div className="uk-width-1-1 uk-text-center marign-footer" uk-grid="true">
          <div className="uk-navbar-left uk-text-center">
            <ul className="uk-navbar-nav ">
              <li className="uk-link-reset">
                <div className="uk-navbar-left uk-text-light uk-text-bold">
                  <div>
                    <i className="lar la-copyright" />
                    2020 NVH,Learn React Redux.
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right uk-text-center">
            <ul className="uk-navbar-nav ">
              <li className="uk-link-reset">
                <div className="uk-navbar-left uk-text-light uk-text-bold">
                  <div>
                    Chính sách bảo mật - Điều khoản &amp; Điều Kiện
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</div>
    );
  }
}

export default footer;
