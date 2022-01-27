import { Link } from 'react-router-dom';
import {AiFillHeart } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import {addFavorite} from '../reduxStore/user';

function MovieCard({item}){
  const dispatch = useDispatch()

  return(
    <>
      <div  className="card" >
        <Link to={`${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
          <img className="card-img-top w-100" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-text">{item.title}</h4>
            <p className="card-text">{item.release_date}</p>
          </div>
        </Link>
        <AiFillHeart onClick={() => dispatch(addFavorite(item.movieId, item.title, item.poster_path, item.release_date))} />
      </div>
    </>
  );
}

export default MovieCard;