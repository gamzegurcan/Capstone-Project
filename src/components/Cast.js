import { useQuery } from 'react-query'
import { fetchCast } from '../data';

function Cast({movieId}) {
  const { data } =
    useQuery(['cast', movieId], () => fetchCast(movieId),
      {
        retry: false,
        select: (data) => data.data

      })
  // console.log(data)
  return (
    <>
      <h3>Movie Crew</h3>
      
        {
          data?.crew?.map((item,index) => (
            <p key={index} >{item?.name} - {item?.known_for_department}</p>
          )).slice(0,5)
        }
      <h3>Cast</h3>
        {
          data?.cast?.map((item,index) =>(
            <div  key={index} className="col-sm-3 mt-3">
              <div  className="card" >
              <img className="card-img-top w-100" src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="..." />
              <div className="card-body">
                <p className="card-text">{item.name}</p>
              </div>
            </div>
            </div>
          )).slice(0,3)
        }
      
    </>
  );
}

export default Cast;