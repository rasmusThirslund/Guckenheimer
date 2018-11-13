import React, {Component} from "react";
import styles from "./topmenu.scss";
import classNames from "classnames/bind";
import {Link} from "react-router-dom";

let cx = classNames.bind(styles);

// LOGO
////////

class Logo extends Component {
  render() {
    return (
      <Link to="/" className={styles.logoTarget}>
        <img
          src="https://via.placeholder.com/200x80/387091/ffffff?text=Logo(200x80)&font=helvetica"
          alt="logo"
          className={styles.logo}
        />
      </Link>
    );
  }
}

// BACK LINK
////////////

class Back extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.back}>
        <Link to="menu">{"<"} Back</Link>
      </div>
    );
  }
}

// TOPMENU MAIN COMP
////////////////////

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this._onToggleMenu = this._onToggleMenu.bind(this);
    this.state = { menuOpen: false };
  }

  _onToggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    let headerClass = cx({
      topMenu: true,
      topMenuOpen: this.state.menuOpen
    });
    const { hideNavigation, back } = this.props;

    return (
      <header className={headerClass}>
        <Logo />

        {/* include navigation */}
        {!hideNavigation && (
          <div className={styles.menu}>
            <button
              className={styles.menuTogglers}
              onClick={this._onToggleMenu}
            >
              <span className={styles.menuToggler}>Menu</span>
              <span className={styles.menuToggler}>Close</span>
              <span className={styles.menuToggleIcon}>
                <span />
                <span />
                <span />
              </span>
            </button>

            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemLink}>
                  Top
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemLink}>
                  Menu
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemLink}>
                  Nutrition
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemLink}>
                  Blog
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemLink}>
                  Catering
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemLink}>
                  People
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemLink}>
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* exclude navigation - show back link */}
        {hideNavigation && back && <Back />}
      </header>
    );
  }
}

export default TopMenu;
