import React, { Component } from 'react';

class App extends Component{
  
  state = {
    album_name: '',
    owned_by: '',
    release_year: '',
    album_url: '',
    more_info: '',
    submitted_by: 'Rhythm',
    vote: 1,
  }
  render(){
    return(
      <div className="wrapper">
        <p className="heading">Popular Metal ALbums</p>
        <div>
          <img src="https://images.unsplash.com/photo-1598387846148-47e82ee120cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="album-iamge"/>
          <div>
            <span>
              &#9650;
            </span>
            <span>2</span>
          </div>
          <a href=''>Batman</a>
          <p>Marvel, 2019</p>
          <div className="avatar-block">
            <p>Submitted by</p>
            <img src="https://i.ibb.co/JkH8ch2/avataaars.png" alt="avtar-image"/>
          </div>
        </div>
        <div>
          <form>
            
          </form>
        </div>
      </div>
    )
  }
}



export default App;
