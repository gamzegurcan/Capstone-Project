import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchSortFilterMovies } from '../data';



function SortFilter(props) {

  const params = useParams();
  const [size, setSize] = useState(3);
  const { data } =
    useQuery(['popularmovies'], () => fetchSortFilterMovies(params.category),
      {
        retry: false,
        select: (data) => data.data.results,
      })

  useEffect(() => {
    setSize(3)
  }, [data])

  function loadMore() {
    if (data.length > size) {
      setSize(size + 3);
    }
  }
  return (
    <div className="container ">
      <div className="row">
        {/* <div className="col-sm-3 mt-5">
          <SortFilter />
        </div> */}
        <div className="col">
          <div className="row">
            <h1 className='text-center'>Movies</h1>
            {
              data?.slice(0, size).map((item, index) => (
                <div key={index} className="col-sm-4 mt-3">
                  <MovieCard item={item} />
                </div>
              ))
            }
          </div>
        </div>
        <button type="button" className="btn btn-danger" onClick={loadMore} >Load More</button>
      </div>
    </div>

  );
}

export default SortFilter;