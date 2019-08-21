
import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
        <div className="card text-center">
            <div className="card-header">
                Memory Game!
            </div>
            <div className="card-body">
                <h5 className="card-title">Click an image to begin!</h5>
                <p className="card-text">Do not click the same album cover twice or you lose.</p>
                <p>Score: {this.props.score} | Top Score: {this.props.topScore}</p>
            </div>
        </div>
    );
  }
}

export default Header;