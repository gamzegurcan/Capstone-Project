import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard";


export default function Profile (props) {
    const user = useSelector((state) => state)
    console.log(user);
    return (
        <><br />
            {
                user?.user?.map((item,index) => <MovieCard  item={item} key={index}/>)
            }
        </>
    )
}