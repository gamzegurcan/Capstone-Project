import { useQuery } from 'react-query';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies } from '../data';

function Popular(props){
  const { data } = 
    useQuery('popularmovies', fetchPopularMovies, 
    { 
      retry: false, 
      select: (data) => data.data.results 
    })
  return(
    <>
    <div className="container mt-5">
      <div className="row">
        <h1 className='text-center'>Popular Movies</h1>
        <div className="col-sm-3 mt-3">
          <div className="dropdown">
            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#/action">Action</a>
              <a className="dropdown-item" href=".">Another action</a>
              <a className="dropdown-item" href=".">Something else here</a>
            </div>
          </div>
        </div>
        {
          data?.map((item) => 
          <div key={item.id} className="col-sm-3 mt-3">
            <MovieCard  item={item} />
          </div>
          )
        } 
      </div>
    </div>
    </>
  );
}

export default Popular;