import React, { Component } from "react";
import styles from "./radiobutton.scss";

class RadioButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, text, name } = this.props;

    return (
      <div className={styles.wrapper}>
        <input type="radio" name={name} id={id} onClick={this.props.onClick} />
        <label htmlFor={id}>{text}</label>
      </div>
    );
  }
}

export default RadioButton;
