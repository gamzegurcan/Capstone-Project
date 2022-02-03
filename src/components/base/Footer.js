import { useSelector } from "react-redux"
import GlobalStyles from "../../styles/Global";

export default function Footer(props) {
  const { themeChange } = useSelector((state) => state);
  const themeName = themeChange ? "light" : "dark"



  return (
    <>
      <GlobalStyles theme={themeName}>
        <footer className="pt-4  pt-md-5  offset-4">
          <div className="row">
            <div className="col-3 col-md-3">
              <h5 className="d-block mb-3 ">©️ Gamze Gürcan</h5>
            </div>
            <div className="col-3 col-md-3">
              <h5 className="d-block mb-3 "> Feb-2022</h5>
            </div>
          </div>
        </footer></GlobalStyles>
    </>
  )
}