import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './threecolgrid.scss'

let cx = classNames.bind(styles);

class threeColGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {		
		let gridClass = cx(this.props.type, {
			threeColGrid: true,
			section: true,
			threeColGridReverse: this.props.reverse
		})
		return (
			<div className={gridClass}>{this.props.children}</div>
		);
	}
}

export default threeColGrid;
