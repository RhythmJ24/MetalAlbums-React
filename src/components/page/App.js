import React, { Component } from 'react';
import { albums } from '../../mock_data/albums';
import { ListView } from '../views/itemList';

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
  render(){
    return(
      <div className="wrapper">
        <p className="heading">Popular Metal ALbums</p>
          <ListView />
        <div>
          <p className="add-new">Add New</p>
          <form>
            <div>
            <input className="input" type="text" name="album_name" placeholder="Album Name" />
            </div>
             <div>
             <input className="input" type="text" name="owned_by" placeholder="Band Name" />
             </div>
             <div>
             <input className="input" type="text" name="release_year" placeholder="Release Year" />
             </div>
             <div>
             <input className="input" type="text" name="album_url" placeholder="Album Cover URL" />
             </div>
            <input className="input" type="text" name="more_info" placeholder="More Info URL" />
            <div>
              <select className="select" name="submitted_by" placeholder="Submitted by">
                <option>Rhythm</option>
                <option>Maxx</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    )
  }
}



export default App;
