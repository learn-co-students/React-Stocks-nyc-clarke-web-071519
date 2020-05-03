import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  handleClick = (e) => {
    this.props.addStockToPortfolio(e)
  }  

  filterStocks = (filter) => {
    let filteredStocksList = []
    if (filter === 'All') {
      filteredStocksList = this.props.stocks
    } else {
      this.props.stocks.map(stock => {
        if (stock.type === filter) {
          filteredStocksList.push(stock)
        }
      })
    }
    return filteredStocksList
  }

  sortStocks = () => {
    const stocksList = this.filterStocks(this.props.filter)
    if (this.props.sortBy === "Alphabetically") {
      return stocksList.sort((a, b) => (a.name > b.name) ? 1 : -1)
    } else if (this.props.sortBy === "Price") {
      return stocksList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    } else {
      return stocksList
    }
  }

  renderStocks = () => {
    const stockList = this.sortStocks()
    return stockList.map(stock => {
      return <Stock key={stock.id} stock={stock} handleClick={this.handleClick}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;