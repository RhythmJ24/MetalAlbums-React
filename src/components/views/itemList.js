import { albums } from "../../mock_data/albums";

const ListView = (props) => {
  return albums.length ? (
    albums
    .map((each, index) => (
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
    ))
  ) : (
    <span>Oops! Nothing found. Try adding</span>
  )
}

export {ListView};