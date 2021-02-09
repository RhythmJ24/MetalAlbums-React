import React, { Component } from 'react';
import { albums } from '../../mock_data/albums';

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
        <div className="album">
          <img className="image-album-class" src="https://images.unsplash.com/photo-1598387846148-47e82ee120cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="album-iamge"/>
          <div className="album-right">
            <div className="vote">
              <span className="arrow-up">
                &#9650;
              </span>
              <span>2</span>
            </div>
            <a className="album-name" href=''>Batman</a>
            <p className="band-name">Marvel, 2019</p>
            <div className="avatar-block">
              <p className="submitted-by">Submitted by</p>
              <img className="aprofile" src="https://i.ibb.co/JkH8ch2/avataaars.png" alt="avtar-image"/>
            </div>
          </div>
        </div>
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
