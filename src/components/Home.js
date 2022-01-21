import { useQuery } from 'react-query'
import { fetchMovies } from '../data'

function Home(props) {
  const { isLoading, isError, isFetching, isFetched, error, data, ...query } = 
    useQuery('movies', fetchMovies, 
    { 
      retry: false, 
      select: (data) => data.data.results 
    })
  console.log("DATA ::: ", data)
  console.log("QUERY ::: ", query)


  return (
    <>
      {
        data?.map((item,index) => 
            <p>{item.title}</p> 
        )
      }
    </>
  );
}

export default Home;