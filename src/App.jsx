import logo from './logo.svg';
import { useEffect } from 'react';
import { request } from './utils/axios-utils';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/homePage';
import SearchResult from './pages/searchResult';

function App() {

  useEffect(()=>{
    document.title = "Search Engine"
    // getData()
  },[])

  // const getData = async ()=>{
  //   try {
  //     const res = await request({url: 'search/q=jokowi'})
  //     console.log('test data response api');
  //     console.log(res);
  //   } catch (error) {
      
  //   }
  // }


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:param/:value" element={<SearchResult/>}/>
    </Routes>
    </>
  );
}


export default App;
