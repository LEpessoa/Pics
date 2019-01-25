import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
  async onSearchSubmit(term) {
    const response = await axios
    .get('https://api.unsplash.com//search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID d8e408640338a5d1740d11fb6ed59e3faa0f0fc7c4e72d6409d1a30e361c091d'
      }
    })
    console.log(response.data.results)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>      
    )
  }
}

export default App;
