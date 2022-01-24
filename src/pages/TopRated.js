import { useQuery } from 'react-query';
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
            <div  className="card" >
              <img className="card-img-top w-100" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
              </div>
            </div>
          </div>
          )
        } 
      </div>
    </div>
    </>
  );
}

export default TopRated;