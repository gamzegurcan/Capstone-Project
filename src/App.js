import {Routes, Route} from 'react-router-dom';
import Navbar from './components/base/Navbar';
import Footer from './components/base/Footer';
import routes from './router';


function App() {
  return (
    <>
      <Navbar />
          <Routes>
            {
              routes.map((item,index) => <Route key={index} path={item.path} element={<item.element />} />)
            }
          </Routes>
      <Footer />
    </>
  );
}

export default App;
