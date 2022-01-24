import { useQuery } from 'react-query';
import { fetchTrendingMovies } from '../data';

function Trending(props){
  const { data } = 
    useQuery('trendmovies', fetchTrendingMovies, 
    { 
      retry: false, 
      select: (data) => data.data.results 
    })
  return(
    <>{
      data?.map((item) => 
      <div key={item.id} className="col-sm-3">
        <div  className="card" >
          <img className="card-img-top w-100" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{item.title}</p>
          </div>
        </div>
      </div>
      )
  } 
    </>
  );
}

export default Trending;