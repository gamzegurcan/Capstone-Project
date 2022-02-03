import { useQuery } from 'react-query'
import { fetchDetailMovies } from '../data';
import { useParams } from 'react-router-dom'
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'
import Recommendation from '../components/Recommendation'
import styled from 'styled-components';

function FilmDetail(props) {
  const params = useParams()
  const movieId = params.movieId
  const { data } =
    useQuery(['detailmovies', movieId], () => fetchDetailMovies(movieId),
      {
        retry: false,
        select: (data) => data.data

      })

  return (
    <>
      <div className="card ">
        <div className="row mb-3 g-0">
          <div className="col-md-4 mt-5 p-5">
            <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} className="img-fluid rounded-start w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body mt-5 ">
              <h2 className="card-title ">{data?.title}</h2>
              <p className="card-text"><small className="text-muted">Release date: {data?.release_date}</small></p>
              <div className=' d-flex'>
                {
                  data?.genres?.map((item) => (
                    <button key={item.id} className='btn btn-danger m-1'>{item.name}</button>
                  ))
                }
              </div>
              <p className="card-text">{data?.overview}</p>
              <div className="row">
                <Cast movieId={movieId} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <h3>Reviews</h3>
        <Reviews movieId={movieId} className='border-none' />
      </div>
      <div className="container">
        <h3>Recommendation Movies</h3>
        <div className="row">
          <Recommendation movieId={movieId} />
        </div>
      </div>
    </>
  );
}

export default FilmDetail;

// const Card = styled.div`
//   border: 0;
//   color: ${({ theme }) => (theme === "light" ? "black": "white" )};
//   background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
// `;

// const ReviewCard = styled.div`
//  border: 0;
//  color: ${({ theme }) => (theme === "light" ? "black": "white"  )};
//  background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
// `;