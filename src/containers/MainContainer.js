import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API_URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filter: 'All',
    sortBy: ''
  }

  componentDidMount() {
    this.fetchStocks();
  }

  render() {
    return (
      <div>
        <SearchBar changeFilter={this.changeFilter} changeSort={this.changeSort} sortBy={this.state.sortBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} filter={this.state.filter} sortBy={this.state.sortBy} addStockToPortfolio={this.addStockToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeStockFromPortfolio={this.removeStockFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

  fetchStocks = () => {
    fetch(API_URL)
      .then(response=>response.json())
      .then(stocksArray => {
        this.setState({
          stocks: stocksArray
        })
      })
  }

  addStockToPortfolio = (e) => {
    let newPortfolio = [...this.state.portfolio]
    let stockToBuy = this.state.stocks.find(stock => {
      return stock.id === parseInt(e.target.id, 10); 
    });
    newPortfolio.push(stockToBuy)
    this.setState({
      portfolio: newPortfolio
    })
  }

  removeStockFromPortfolio = (e) => {
    let newPortfolio = this.state.portfolio
    let stockToSellIndex = this.state.portfolio.findIndex(stock => {
      return stock.id === parseInt(e.target.id, 10);
    });
    newPortfolio.splice(stockToSellIndex,1)
    this.setState({
      portfolio: newPortfolio
    })
  }

  changeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  changeSort = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }
}

export default MainContainer;