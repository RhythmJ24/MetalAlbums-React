import {placeholder } from "../../../mock_data/albums";
import {Image} from '../../elements/Image/image';
import {users} from '../../../mock_data/users';

const ListView = (props) => {
  const {albums, handleVote} = props;

  const selectProfile = (name) => {
    return users.find((user) => user.name == name).avatar;
  };

  return albums.length ? (
    albums
    .map((each, index) => (
      <div key={index} className="album">
          <Image 
            url={each.album_url || placeholder} 
            alt="album"
          />
          <div className="album-right">
            <div className="vote">
              <span className="arrow-up" onClick={() => handleVote(index)}>
                &#9650;
              </span>
              <span>{each.vote}</span>
            </div>
            <a className="album-name" target="_blank" href={each.more_info}>
              {each.album_name}
            </a>
            <p className="band-name">{`${each.owned_by}, ${each.release_year}`}</p>
            <div className="avatar-block">
              <p className="submitted-by">Submitted by</p>
            <Image 
              url={selectProfile(each.submitted_by)}
              alt="people"
              type="aprofile"
            />
            </div>
          </div>
        </div>
    ))
  ) : (
    <span>Oops! Nothing found. Try adding</span>
  )
}

export {ListView};