import { DebounceInput } from "react-debounce-input";

function Search({ search, setSearch }) {
    
    return (
        <>
            <DebounceInput
                name="qInput"
                type="text"
                id="search"
                className="form-control"
                debounceTimeout={300}
                value={search}
                onChange={event => {setSearch(event.target.value)
                //   console.log(event.target.value)
                }}
                placeholder="Search films by name"
            />
        </>
    )
}

export default Search