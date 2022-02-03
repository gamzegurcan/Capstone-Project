import { useQuery } from 'react-query'
import { useState, useEffect } from "react";
import { fetchSearchMovies } from '../data';
import Search from '../components/Search';
import Discover from '../components/Discover';
import Trending from '../components/Trending';
import MovieCard from '../components/MovieCard';

function Home(props) {
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const { data } = 
    useQuery(['searchmovies',search],() => fetchSearchMovies(search), 
    { 
      retry: false, 
      select: (data) => data.data.results 
    })

  function searchFilter(item) {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return true
    }
    return false
  }

  useEffect(() => {
    setFilteredData(data?.filter(searchFilter)) 
}, [ search,data])

  if(search !== '' ){
    return (
      <>
        <div className="row mx-0 d-flex ">
        <div className="col-5 offset-3 mt-5">
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="container">
        <div className="row">
        {
        filteredData?.map((item) => 
        <div key={item.id} className="col-sm-3 mt-5">
          <MovieCard item={item} />
        </div>
        )
    }
        </div>
      </div>
     
      </>
    )
    
  }
  return (
    <>
      <div className="row mx-0 d-flex ">
        <div className="col-5 offset-3 mt-5">
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>
      
      <div className="container">
        <div className="row">
        <h1 className='mb-5'>Discover</h1>
          <Discover />
        </div>
      </div>
      
      <div className="container">
        <div className="row mt-5">
        <h1 className='mb-5'>Trending</h1>
          <Trending />
        </div>
      </div>
    </>
  );
}

export default Home;