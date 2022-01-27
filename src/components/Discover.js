import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { fetchDiscoverMovies } from '../data';

function Discover(props) {
  const { data } =
    useQuery('discovermovies', fetchDiscoverMovies,
      {
        retry: false,
        select: (data) => data.data.results
      })

  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <>
      <Slider {...settings}>
        {
          data?.map((item) =>
            <div key={item.id} className="col-sm-3">
              <div className="card" >
                <Link to={`${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <img className="card-img-top w-100" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        }
      </Slider>

    </>
  );
}

export default Discover;