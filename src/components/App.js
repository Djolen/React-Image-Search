import React from 'react';  
import axios from 'axios';
import SearchInput from './Searchimport'; 
import ImageList from './ImageList'; 


class App extends React.Component{  

    api_key = process.env.REACT_APP_PIXABAZ_API_KEY

    state = { images: [] }

     onSearchSubmit = async (entry) =>{
        const response = await axios.get(`https://pixabay.com/api/?key=${this.api_key}=${entry}&image_type=photo`) 
        console.log(response.data.hits)  
        this.setState({images : response.data.hits})
    }

    render(){
        return( 
     
            <div className='ui container' style={{marginTop:'30px'}}>
              <SearchInput onSearchSubmit={this.onSearchSubmit}  />  
                  <ImageList images={this.state.images} />         
            </div>
       
            
          )
    }
}


  
 export default App;