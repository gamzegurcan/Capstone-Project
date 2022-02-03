import { useQuery } from 'react-query'
import { fetchReviews } from "../data";

function Reviews({movieId}){
  const { data } =
    useQuery(['reviews', movieId], () => fetchReviews(movieId),
      {
        retry: false,
        select: (data) => data.data.results

      })
      // console.log(data)
  return(
    <>
      {
        data?.map((item,index) => (
          <div className="card border-0 mb-5">
            <div className="card-body">
              <h5 className="card-title">{item.author}</h5>
              <p className="card-text">{item.content.substring(0,300)}...</p>
            </div>
          </div>
        )).slice(0,1)
      }
    </>
  );
}

export default Reviews;