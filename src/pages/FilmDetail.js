import { useQuery } from 'react-query'
import { fetchDetailMovies } from '../data';
import { useParams } from 'react-router-dom'
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'
import Recommendation from '../components/Recommendation'

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
      <div className="card mb-3 m-5 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} className="img-fluid rounded-start w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{data?.title}</h2>
              <p className="card-text"><small className="text-muted">Release date: {data?.release_date}</small></p>
              <div className=' d-flex'>
                {
                  data?.genres?.map((item) => (
                    <p className='card-text' key={item.id} > {item.name},</p>
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
      <div className="container m-5">
        <h3>Reviews</h3>
        <Reviews movieId={movieId} />
      </div>
      <div className="container m-5">
        <h3>Recommendation Movies</h3>
        <div className="row">
          <Recommendation movieId={movieId} />
        </div>
      </div>
    </>
  );
}

export default FilmDetail;