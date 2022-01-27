import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { fetchDiscoverMovies } from '../data';
import MovieCard from './MovieCard';


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
              <MovieCard item={item} />
            </div>
          )
        }
      </Slider>

    </>
  );
}

export default Discover;