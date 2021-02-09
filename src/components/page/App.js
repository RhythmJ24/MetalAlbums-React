import React, { Component } from 'react';
import { albums } from '../../mock_data/albums';
import { AddNew } from '../views/add/addItem';
import { ListView } from '../views/list/itemList';

class App extends Component{
  
  state = { 
    new:{
      album_name: '',
      owned_by: '',
      release_year: '',
      album_url: '',
      more_info: '',
      submitted_by: 'Rhythm',
      vote: 1 },
    total : albums,
  }
    
  handleVote = (index) => {
    this.setState((current) => {
      let final = [...current.total];
      let updateItem = {...final[index]};
      final[index] = {...updateItem, vote: ++updateItem.vote};

      return {
        new: current.new,
        total: final,
      };
    });
  };


  render(){
    return(
      <div className="wrapper">
        <p className="heading">Popular Metal ALbums</p>
          <ListView 
            albums={this.state.total}
            handleVote={(index) => this.handleVote(index)}
          />

          <AddNew />
        
      </div>
    );
  }
}



export default App;
