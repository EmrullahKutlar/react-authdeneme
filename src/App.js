import './App.css';
import { Routes, Route, useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<Navigation />} >
    //     <Route index element={<Home />} />
    //     <Route path='contact' element={<Contact/>} />
    //     <Route path='about' element={<About/>} />
    //   </Route>  
    //   <Route path='login' element={<Auth/>} />

    // </Routes>
    useRoutes(routes)
  );
}

export default App;
