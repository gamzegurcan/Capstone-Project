import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import {addFavorite, removeFavorite} from '../reduxStore/user';


function MovieCard({item}){
  const dispatch = useDispatch()
  const {user}= useSelector((state) => state )
  // console.log(user)
  const isFav = user?.some((fav) => fav.id === item.id)
  // console.log(isFav, item.id)

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
        {
          isFav ? <AiFillHeart onClick={() => dispatch(removeFavorite(item.id))} /> :
          <AiOutlineHeart onClick={() => dispatch(addFavorite(item.id, item.title, item.poster_path, item.release_date))} />
        }
      </div>
    </>
  );
}

export default MovieCard;