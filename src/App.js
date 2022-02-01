import { Routes, Route } from 'react-router-dom';
import Navbar from './components/base/Navbar';
import Footer from './components/base/Footer';
import routes from './router';
import { useSelector } from 'react-redux';
import GlobalStyles from './styles/Global';


function App() {

  const { themeChange } = useSelector((state) => state)
  const themeName = themeChange ? "light" : "dark"

  return (
    <>
      <Navbar />
      <GlobalStyles theme={themeName} >
        <Routes>
          {
            routes.map(
              (item, index) =>
                <Route key={index} path={item.path} element={<item.element />} />
            )
          }
        </Routes>
      </GlobalStyles>
    </>
  );
}

export default App;
