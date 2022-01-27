import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { slidesOnLeft } from 'react-slick/lib/utils/innerSliderUtils';
import { fetchTrendingMovies } from '../data';
import MovieCard from './MovieCard';

function Trending(props){
  const { data } = 
    useQuery('trendmovies', fetchTrendingMovies, 
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

  return(
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

export default Trending;