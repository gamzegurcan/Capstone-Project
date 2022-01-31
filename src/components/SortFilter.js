import {  Button, ButtonGroup } from "react-bootstrap";
import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addGenres } from "../reduxStore/sortFilter";

export default function SortFilter() {
  const [genre_id, setGenre_id] = useState("");
  const [sort, setSort] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2d20344e6f6a87e7e2ad84a103865cd9&sort_by=${sort}&release_date.gte=${dateFrom}&release_date.lte=${dateTo}&with_genres=${genre_id}`)
  .then(response => response.json())
  .then(data => setData(data));

  },[dateTo,dateFrom,sort,genre_id])

  
   console.log(dateTo,dateFrom,sort,genre_id);

  return (
    <>
    <select className="form-select" aria-label="Default select example" onChange={(e) => setSort((e.target.options[e.target.selectedIndex].value))}>
      <option disabled selected hidden>Sort By</option>
      <option value="original_title.asc">A to Z by The Title</option>
      <option value="original_title.desc">Z to A by The Title</option>
      <option value="popularity.asc">Increasing by Popularity</option>
      <option value="popularity.desc">Decreasing by Popularity</option>
      <option value="release_date.gte">Increasing by Release Date</option>
      <option value="release_date.lte">Decreasing by Release Date</option>
    </select>
      <div className=" d-flex flex-column">
        <h3 className="mt-3">Filter By</h3>
        <label htmlFor="text" className="mt-3">
          From:
        </label>
        <input type="date" onChange={(e) => setDateTo(e.target.value)}/>
        <label htmlFor="text" className="mt-3">
          To:
        </label>
        <input type="date"  onChange={(e) => setDateFrom(e.target.value)}/>
      </div>

      <ButtonGroup size="sm" className="mt-2">
        <Button
          className="m-2"
          variant="danger"
          onClick={(e) => setGenre_id(e.target.value)}
          value={28}
        >
          Action
        </Button>
        <Button
          className="m-2"
          variant="danger"
          onClick={(e) => setGenre_id(e.target.value)}
          value={12}
        >
          Adventure
        </Button>
        <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)}
          value={35}>
          Comedy
        </Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)}
          value={10749}>
          Romance
        </Button>
        <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)}
          value={18}>
          Drama
        </Button>
        <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)}
          value={80}>
          Crime
        </Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)}
          value={27}>
          Horror
        </Button>
        <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)}
          value={878}>
          Science Fiction
        </Button>
        <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)}
          value={10752}>
          War
        </Button>
      </ButtonGroup>

      <Button className="m-2" variant="secondary" size="sm" onClick={() => dispatch(addGenres(data)) }>
        Search
      </Button>
    </>
  );
}