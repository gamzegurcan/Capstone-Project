import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard";


export default function Profile ({item}) {
    const user = useSelector((state) => state)

    return (
        <>
           <div className="container">
               <div className="row mt-5">
                   <h1>Favorite Movies</h1>
               {
                user?.user?.map((item,index) => 
                    <div className="col-sm-3" key={index}>
                        <MovieCard  item={item} />
                    </div>
                )
               }
               </div>
           </div>
        </>
    )
}