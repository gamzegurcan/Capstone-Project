import { useQuery } from 'react-query'
import { useState, useEffect } from "react";
import { fetchMovies } from '../data';
import Search from '../components/Search';

function Home(props) {
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const { data } = 
    useQuery('movies', fetchMovies, 
    { 
      retry: false, 
      select: (data) => data.data.results 
    })
  // console.log("DATA ::: ", data)
  // console.log("QUERY ::: ", query)

  function searchFilter(item) {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return true
    }
    return false
  }

  useEffect(() => {
    setFilteredData(data?.filter(searchFilter)) 
}, [ search,data])
  
  return (
    <>
      <div className="row mx-0 d-flex">
        <div className="col-5 offset-3">
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className="col-4">
          <button type="button"  className="btn btn-primary">Reset</button>
        </div>
      </div>
      {
        filteredData?.map((item,index) => 
            <p>{item.title}</p> 
        )
      }
    </>
  );
}

export default Home;