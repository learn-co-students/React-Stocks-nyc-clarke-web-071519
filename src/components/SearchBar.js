import React, { Component } from 'react';

class SearchBar extends Component {
  
  state = {
    sortValue: ''
  }

  handleChange = (e) => {
    this.setState({
      sortValue: e.target.value
    })
    this.props.changeSort(e)
  }

  render() {
    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.sortValue === "Alphabetically"} onChange={this.handleChange}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.sortValue === "Price"} onChange={this.handleChange}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.props.changeFilter}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );

  }
}


export default SearchBar;
