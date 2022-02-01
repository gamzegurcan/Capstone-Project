import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import {BsFillBookmarkFill, BsBookmark} from 'react-icons/bs';
import {addFavorite, removeFavorite } from '../reduxStore/favorite';
import {addSeen, removeSeen } from '../reduxStore/seenMovie';
import {CardStyle, CardText, CardTitle} from '../styles/MovieCardStyled';


function MovieCard({item}){
  const dispatch = useDispatch()
  const {favorite, seen,themeChange}= useSelector((state) => state )
  // console.log(user)
  const isFav = favorite?.films?.some((fav) => fav.id === item.id)
  // console.log(isFav, item.id)
  const isSeen = seen?.films?.some((seen) => seen.id === item.id)

  const themeName = themeChange ? "light" : "dark"


  return(
    <>
      <CardStyle>
        <Link to={`${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
          <img className="card-img-top w-100" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}  alt="..." />
          <div className="card-body">
            <CardTitle theme={themeName}>{item.title}</CardTitle>
            <CardText theme={themeName}>{item.release_date}</CardText>
          </div>
        </Link>
        <div className="row">
          <div className="col">
            {
              isFav 
              ? <AiFillHeart onClick={() => dispatch(removeFavorite(item.id))} />
              : <AiOutlineHeart onClick={() => dispatch(addFavorite(item.id, item.title, item.poster_path, item.release_date))} />
            }
            {
              isSeen 
              ? <BsFillBookmarkFill onClick={() => dispatch(removeSeen(item.id))} /> 
              : <BsBookmark onClick={() => dispatch(addSeen(item.id, item.title, item.poster_path, item.release_date))} />
            }
          </div>
        </div>
      </CardStyle>
      {/* <CardContainer>
      <Link to={`${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
        <Card>
          <CardImage>
            <img className="card-img-top w-100" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="..." />
          </CardImage>
          <h4 className="card-text">{item.title}</h4>
          <p className="card-text">{item.release_date}</p>
        </Card>
        </Link>
        <div className="row">
          <div className="col">
          {
          isFav ? <AiFillHeart onClick={() => dispatch(removeFavorite(item.id))} /> :
          <AiOutlineHeart onClick={() => dispatch(addFavorite(item.id, item.title, item.poster_path, item.release_date))} />
        }
        {
          isSeen ? <BsFillBookmarkFill onClick={() => dispatch(removeSeen(item.id))} /> :
          <BsBookmark onClick={() => dispatch(addSeen(item.id, item.title, item.poster_path, item.release_date))} />
        }
          </div>
        </div>
      </CardContainer> */}
    </>
  );
}

export default MovieCard;