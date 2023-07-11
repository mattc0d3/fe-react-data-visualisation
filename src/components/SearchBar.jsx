import {useState} from "react"

const SearchBar = ({ setSearchLocation }) => {

    const [newLocation, setNewLocation] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchLocation(newLocation)
    }

    return <div id="searchbar-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-input">Location: </label>
            <input id="search-input" value={newLocation} onChange={event => setNewLocation(event.target.value)}></input>
            <button>Search</button>
        </form>
    </div>
}

export default SearchBar