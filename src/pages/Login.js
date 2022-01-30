import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userLogin } from "../reduxStore/user";

function Login(){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();
const {user } = useSelector((state) => state);

const navigate = useNavigate();

useEffect(() => {
  if(user?.login) {
    navigate('/profile');
  }
}, [navigate,user]);

function handleSubmit (event) {
  event.preventDefault();
}

  return(
    <>
   <Container>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control"  />
            </div>
            <button type="submit" className="btn btn-danger" onClick={() => dispatch(userLogin(username,password))}>Submit</button>
          </form>

    </Container>
      
    </>
  );
}


export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  width: 25%;
  margin-top: 100px;
  border: 2px solid red;
`;