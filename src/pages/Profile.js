import { useSelector } from "react-redux"
import { useState } from "react";
import { useQuery } from 'react-query';
import UserProfile from "../components/UserProfile";
import { fetchGenres } from "../data";
import FavoriteSeen from "../components/FavoriteSeen";

export default function Profile(props) {
    const [sort, setSort] = useState();

    const { data } = useQuery("movies genre", fetchGenres, {
        retry: false,
        select: (data) => data.data.genres,
    });

    const { favorite, seen } = useSelector((state) => state);
    // console.log(favorite)
    const movies = favorite?.films.concat(seen?.films);
    // console.log(movies)
    const unique = movies?.filter(
        (item, index, ar) => ar?.map((data) => data.id).indexOf(item.id) === index
    );
    // console.log( 'hsdjhsjghsg',unique)

    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col mt-5">
                        <UserProfile />
                    </div>
                </div>
                <div className="row">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) =>
                            setSort(e.target.options[e.target.selectedIndex].value)
                        }
                    >
                        <option value="all">all</option>
                        <option value="date">closest release date</option>
                        <option value="fav">favorites</option>
                        <option value="seen">seen</option>
                    </select>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Movie ID</th>
                            <th scope="col">Movie Title</th>
                            {/* <th scope="col">Movie Genre</th> */}
                            <th scope="col">Favorite/Seen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sort === "fav"
                            ? favorite?.films?.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <FavoriteSeen item={item} />
                                    </td>
                                </tr>
                            ))
                            : sort === "seen"
                                ? seen?.films?.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            <FavoriteSeen item={item} />
                                        </td>
                                    </tr>
                                ))
                                : unique?.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            <FavoriteSeen item={item} />
                                        </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}