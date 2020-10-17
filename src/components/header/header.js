import React, { Component } from "react";
import Time from "../time/time";
import "./header.css";
class header extends Component {
  render() {
    return (
      <div uk-sticky="animation: uk-animation-slide-top;top : 50px">
        <nav className="uk-navbar uk-background-danger uk-navbar-container uk-margin">
          <div className="uk-navbar-left uk-margin-left uk-text-while uk-link-reset">
            <div
              className="uk-navbar-toggle uk-text-while  uk-link-reset"
              uk-toggle="target: #offcanvas-nav"
            >
              <span uk-navbar-toggle-icon="true" />
              <span className="uk-margin-small-left uk-text-while uk-link-reset">
                <strong>Trang Chủ</strong>
              </span>
            </div>
          </div>
          <div>
            <div
              className="uk-background-default"
              id="offcanvas-nav"
              uk-offcanvas="overlay: true"
            >
              <div className="uk-offcanvas-bar uk-background-offcanvas uk-text-while">
                <ul className="uk-nav uk-nav-default uk-text-while uk-link-reset uk-text-center">
                  <li>
                    <img
                      src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                      width={200}
                      className="height150 uk-padding-small"
                      alt="logo"
                    />
                  </li>
                  <li className="uk-nav-divider"></li>
                  <li className="uk-align-center uk-text-center">
                    <ul className="uk-flex uk-list uk-list-collapse uk-flex-center uk-margin-auto">
                        <li>
                          <a href="https://www.facebook.com/Hai0498">
                          <i className="lab la-facebook-f"></i>
                          </a>
                        </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="lab la-instagram la-lg uk-margin-left uk-margin-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=rGodU9EZKnA&list=RDrGodU9EZKnA&start_radio=1">
                          <i className="lab la-twitter la-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="uk-nav-divider"></li>
                  <li>
                    <ul uk-accordion="true">
                      <li>
                        <div className="uk-accordion-title">Product</div>
                        <div className="uk-accordion-content uk-flex uk-flex-center">
                          <a href="Product.html">ItemProDuct</a>
                        </div>
                      </li>
                      <li>
                        <div className="uk-accordion-title">Card</div>
                        <div className="uk-accordion-content">
                          <a href="Product.html">ItemProDuct</a>
                        </div>
                      </li>
                      <li>
                        <div className="uk-accordion-title">Item</div>
                        <div className="uk-accordion-content">
                          <a href="Product.html">ItemProDuct</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="uk-navbar-center uk-light ">
            <ul className="uk-navbar-nav">
              <Time />
            </ul>
          </div>
          <div className="uk-navbar-right uk-margin-right">
            <ul className="uk-navbar-nav">
              <div className="cursorPointer">
                {/* <i className="las la-user uk-margin-small-right"></i> */}
                Nguyễn Văn Hải
                <i className="las la-caret-down uk-margin-small-left"></i>
              </div>
              <div uk-dropdown="mode: click">
                <ul className="uk-nav uk-dropdown-nav uk-list">
                  <li>
                    <div>
                      <img
                        src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/121138128_371401340866954_7659182202528959563_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=VX-p6AoYygYAX8clJ5g&_nc_ht=scontent.fdad3-2.fna&oh=a1f4d4841ab3a9bcdfd38c0d339b453a&oe=5FA9424F"
                        width={50}
                        className="uk-border-circle uk-margin-small-right height50"
                        alt="Avatar"
                      />
                      <span className="uk-text-middle">Nguyễn Văn Hải</span>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a href="modal.html">Login</a>
                  </li>
                  <li>
                    <a href="index.html">Logout</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default header;
