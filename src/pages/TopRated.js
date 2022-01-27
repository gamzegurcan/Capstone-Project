import { useQuery } from 'react-query';
import MovieCard from '../components/MovieCard';
import { fetchTopRatedMovies } from '../data';

function TopRated(props){
  const { data } = 
    useQuery('topratedmovies', fetchTopRatedMovies, 
    { 
      retry: false, 
      select: (data) => data.data.results 
    })
  return(
    <>
    <div className="container mt-5">
      <div className="row">
        <h1 className='text-center'>Top Rated Movies</h1>
        {
          data?.map((item) => 
          <div key={item.id} className="col-sm-3 mt-3">
            <MovieCard item={item} />
          </div>
          )
        } 
      </div>
    </div>
    </>
  );
}

export default TopRated;