import {
  Dropdown,
  DropdownButton,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { fetchSortMovies } from "../data";
import { addGenres } from '../reduxStore/sortFilter';

function SortFilter(){
  const [value, setValue] = useState("");
  const [genre_id, setGenre_id] = useState("");

  const dispatch = useDispatch();

  const { data } = useQuery(['sort Movies', genre_id], () => fetchSortMovies(genre_id), {
    retry: false,
    select: (data) => data.data.results,
  });

  return(
    <>
      <DropdownButton
            variant="danger"
            title={`${value}` ? `${value}` : `sort by`}
            id="dropdown-menu-align-right"
            onSelect={(e) => setValue(e)}
            className="mt-4"
          >
            <Dropdown.Item eventKey="A to Z by The Title ">
              A to Z by The Title
            </Dropdown.Item>
            <Dropdown.Item eventKey="Z to A by The Title ">
              Z to A by The Title
            </Dropdown.Item>
            <Dropdown.Item eventKey="Increasing by Popularity">
              Increasing by Popularity
            </Dropdown.Item>
            <Dropdown.Item eventKey="Decreasing by Popularity">
              Decreasing by Popularity
            </Dropdown.Item>
            <Dropdown.Item eventKey="Increasing by Release Date">
              Increasing by Release Date
            </Dropdown.Item>
            <Dropdown.Item eventKey="Decreasing by Release Date">
              Decreasing by Release Date
            </Dropdown.Item>
          </DropdownButton>

          <div className=" d-flex flex-column">
            <h3 className="mt-3">Filter By</h3>
            <label htmlFor="text" className="mt-3">
              From:
            </label>
            <input type='date' />
            <label htmlFor="text" className="mt-3">
              To:
            </label>
            <input type='date' />
          </div>

          <ButtonGroup size="sm" className="mt-2">
            <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)} value={28} >
              Action
            </Button>
            <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)} value={12}>
              Adventure
            </Button>
            <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)} value={35}>
              Comedy
            </Button>
          </ButtonGroup>
          <ButtonGroup size="sm">
            <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)} value={10749}>
              Romance
            </Button>
            <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)} value={18}>
              Drama
            </Button>
            <Button className="m-2" variant="danger" onClick={(e) => setGenre_id(e.target.value)} value={80}>
              Crime
            </Button>
          </ButtonGroup>
          <Button className="m-2" variant="secondary" size="sm" onClick={() => dispatch(addGenres(data))} >
            Search
          </Button>
        </>
  );
}

export default SortFilter;