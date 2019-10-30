import React from 'react';

class Board extends React.Component {
  render() {
    return <div>{this.props.tiles.map( (tile, idx) => {
    	let position = { 
      	left : `${ 50 * (idx % this.props.columns) }px`, 
        top : `${ 50 * Math.floor(idx / this.props.columns ) }px` 
        };
    	return <div className="tile" style={ position }>{ idx }</div>
    })}</div>;
  }
}

export default Board;