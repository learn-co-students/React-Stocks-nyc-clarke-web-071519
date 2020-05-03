import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  handleClick = (e) => {
    this.props.removeStockFromPortfolio(e)
  }

  renderStocks = () => {
    return this.props.portfolio.map(stock => {
      return <Stock key={stock.id} stock={stock} handleClick={this.handleClick}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;