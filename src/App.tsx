import { FC } from 'react';
import Home from "./pages/Home/Home"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Flag from './pages/Country/Country';
import Layout from './components/Layout/Layout';
const App:FC = () => (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <Layout>
        <Home/>    
      </Layout> 
      }/>
      <Route path=":flag" element={
      <Layout>
        <Flag/>
      </Layout>
      }/>
    </Routes>
    </BrowserRouter>    
  </div>
);

export default App;
