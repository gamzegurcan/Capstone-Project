import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies } from '../data';
import SortFilter from '../components/SortFilter';
import { useState } from 'react';
import {loadMoreMovies} from '../reduxStore/loadMore'

function Popular(props){

  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const {loadMoreData} = useSelector((state) => state)
  const { filteredData } = useSelector((state) => state);

  const { data } = 
    useQuery(['popularmovies', page], () => fetchPopularMovies(page), 
    { 
      retry: false, 
      select: (data) => data.data.results 
    })
  
  function loadMore () {
    setPage((prevValue) => prevValue + 1);
    dispatch(loadMoreMovies(data))
  }

  console.log(data)

  if(filteredData[0]?.length > 0) {
    console.log(filteredData[0])
    return <div className="container ">
    <div className="row">
      <div className="col-sm-3 mt-5">
        <SortFilter />
      </div>
      <div className="col">
        <div className="row">
          
        <h1 className='text-center'>Popular Movies</h1>
        
        {
          filteredData[0]?.map((item,i) => (
          <div key={i} className="col-sm-4 mt-3">
            <MovieCard item={item} />
          </div>
          ))
        } 
        </div>
      </div>
        
      </div>
  </div>;
    
  }

  return(
    
    <div className="container ">
      <div className="row">
        <div className="col-sm-3 mt-5">
          <SortFilter />
        </div>
        <div className="col">
          <div className="row">
          <h1 className='text-center'>Popular Movies</h1>
          {
            loadMoreData[0]?.map((item,index) => (
            <div key={index} className="col-sm-4 mt-3">
              <MovieCard item={item} />
            </div>
            )).concat(data?.map((item,index) => (
            <div key={index} className="col-sm-4 mt-3">
              <MovieCard item={item} />
            </div>
            )))
          } 
          </div>
        </div>
          <button type="button" className="btn btn-danger" onClick={loadMore} >Load More</button>
        </div>
    </div>
    
  );
}

export default Popular;