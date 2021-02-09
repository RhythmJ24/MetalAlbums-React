import { options } from "../../../mock_data/users";
import { Input } from "../../elements/Input/input";
import { Select } from '../../elements/Select/select';


const AddNew = (props) => {
  const { handleSubmit, handleChange, currentValue } = props;
  console.log(currentValue,'-------currentvalue');
  return (
    <div>
          <p className="add-new">Add New</p>
          <form onSubmit={handleSubmit}>
            
            <Input  
              required
              name="album_name" 
              placeholder="Album Name" 
              value={currentValue.album_name}
              onChange={handleChange}
            />
            
             <Input  
                required
                name="owned_by" 
                placeholder="Band Name"
                value={currentValue.owned_by}
                onChange={handleChange} 
            />
             
             <Input  
                required
                name="release_year" 
                placeholder="Release Year" 
                value={currentValue.release_year}
                onChange={handleChange}
             />
             
             <Input 
                required 
                name="album_url" 
                placeholder="Album Cover URL"
                value={currentValue.album_url}
                onChange={handleChange}
             />
             
            <Input  
                required
                name="more_info" 
                placeholder="More Info URL"
                value={currentValue.more_info}
              onChange={handleChange} 
            />
            <Select 
              options ={options}
              name="submitted_by" 
              placeholder="Submitted by" 
              value={currentValue.submitted_by}
              onChange={handleChange}
            />
            <button className="button">Submit</button>
          </form>
        </div>
  );
};

export {AddNew};