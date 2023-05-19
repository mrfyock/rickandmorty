import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    //I need to get the input from the textbox
    //where will I put it? create state
    const [query, setQuery] = React.useState('')

    //https://rickandmortyapi.com/api/character/?name=beth

    const handleSubmit = (e) =>{
        //stop the page from refreshing
        e.preventDefault();
        console.log('search for ', query)
        //I need to make api call to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res =>{
            console.log(res.data.results)
            //what needs to happen to show this
            //data on Homepage?
            //change characters to this data
            setCharacters(res.data.results)

        })
        .catch(err =>{ 
            //check for not found
            if (err.response.status === 404){
                alert(`No characters named ${query}`)
            }
            else{
                console.log(err)
            }
            
        })

        //clear textbox
        setQuery('')

    }

  return (
    <form className="search-container" 
           onSubmit={handleSubmit}>
        <input onChange={(e)=>setQuery(e.target.value)}
        value={query}
        type="text" placeholder="Search all characters" />
    </form>
  )
}

export default Search