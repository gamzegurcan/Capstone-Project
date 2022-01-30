import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard";
import UserProfile from "../components/UserProfile";


export default function Profile ({item}) {
    const {favorite, seen} = useSelector((state) => state);

    return (
        <>

           <div className="container">
               <div className="row mt-5">
                   <div className="col">
                        <UserProfile />
                   </div>
               </div>
               <div className="row mt-5">
                   <h1>Favorite Movies</h1>
               {
                favorite?.films?.map((item,index) => 
                    <div className="col-sm-3" key={index}>
                        <MovieCard  item={item} />
                    </div>
                )
               }
               </div>
               <div className="row mt-5">
                   <h1>Seen Movies</h1>
               {
                seen?.films?.map((item,index) => 
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