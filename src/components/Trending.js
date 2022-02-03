import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { fetchTrendDayMovies } from "../data";
import MovieCard from './MovieCard';

function Trending({trend}){
  const { data } = useQuery(["trend movies ",trend],() => fetchTrendDayMovies(trend), {
    retry: false,
    select: (data) => data.data.results,
  });

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
    <Slider {...settings} className='mb-5'>
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