import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies } from '../data';
import SortFilter from '../components/SortFilter';

function Popular(props){
  const { data } = 
    useQuery('popularmovies', fetchPopularMovies, 
    { 
      retry: false, 
      select: (data) => data.data.results 
    })

  const { filteredData } = useSelector((state) => state);
  // console.log(filteredData[0])
  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  if(filteredData[0]?.length > 0) {
    console.log(filteredData[0])
    return <div className="container mt-5">
    <div className="row">
      <div className="col-sm-3">
        <SortFilter />
      </div>
      <div className="col-sm-9">
        <h1 className='text-center'>Popular Movies</h1>
        <Slider {...settings}>
        {
          filteredData[0]?.map((item,i) => (
          <div key={i} className="col-sm-3 mt-3">
            <MovieCard item={item} />
          </div>
          ))
        } 
        </Slider>
      </div>
    </div>
  </div>;
    
  }

  return(
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3">
          <SortFilter />
        </div>
        <div className="col-sm-9">
          <h1 className='text-center'>Popular Movies</h1>
          <Slider {...settings}>
          {
            data?.map((item) => 
            <div key={item.id} className="col-sm-3 mt-3">
              <MovieCard item={item} />
            </div>
            )
          } 
          </Slider>
        </div>
      </div>
    </div>
    
  );
}

export default Popular;