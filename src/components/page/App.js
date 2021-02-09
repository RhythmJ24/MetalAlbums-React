import React, { Component } from 'react';
import { albums } from '../../mock_data/albums';
import { AddNew } from '../views/add/addItem';
import { ListView } from '../views/list/itemList';

class App extends Component {
  state = { new: {
      album_name: '',
      owned_by: '',
      release_year: '',
      album_url: '',
      more_info: '',
      submitted_by: 'Rhythm',
      vote: 1 },
    total: albums,
  };

  handleVote = (index) => {
    this.setState((current) => {
      let final = [...current.total];
      let updateItem = { ...final[index] };
      final[index] = { ...updateItem, vote: ++updateItem.vote };
  
      return {
        new: current.new,
        total: final,
      };
    });
  };

  handleChange = (event) => {
    this.setState((current) => ({
      total: [...current.total],
      new: {
        ...current.new,
        [event.target.name]: event.target.value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((current) => ({
      total: [...current.total, this.state.new],
      new: {
        album_name: '',
        owned_by: '',
        release_year: '',
        album_url: '',
        more_info: '',
        submitted_by: 'Rhythm',
        vote: 1,
      },
    }));
  };

  handleRemove = (index) => {
    this.setState((current) => {
      let newSet = [...current.total];
      newSet.splice(index, 1);
      return {
        ...current,
        total: newSet,
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <p className="heading"> Popular Metal Albums</p>
        <ListView
          albums={this.state.total}
          handleVote={(index) => this.handleVote(index)}
          removeItem={(index) => this.handleRemove(index)}
        />
        <AddNew
          currentValue={this.state.new}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}


export default App;
