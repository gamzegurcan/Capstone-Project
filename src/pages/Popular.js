import { useQuery } from 'react-query';
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

export default Popular;