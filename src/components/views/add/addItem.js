import { options } from "../../../mock_data/users";
import { Input } from "../../elements/Input/input";
import { Select } from '../../elements/Select/select';


const AddNew = (props) => {
  return (
    <div>
          <p className="add-new">Add New</p>
          <form>
            
            <Input  
              name="album_name" 
              placeholder="Album Name" 
            />
            
             <Input  
                name="owned_by" 
                placeholder="Band Name" 
            />
             
             <Input  
                name="release_year" 
                placeholder="Release Year" 
             />
             
             <Input  
                name="album_url" 
                placeholder="Album Cover URL" 
             />
             
            <Input  
                name="more_info" 
                placeholder="More Info URL" 
            />
            
              <Select 
                options ={options}
                 name="submitted_by" 
                 placeholder="Submitted by" 

              />
                
          
            <button className="button">Submit</button>
          </form>
        </div>
  );
};

export {AddNew};