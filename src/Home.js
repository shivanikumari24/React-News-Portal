import {React} from 'react';
import Search from "./search";
import Stories from "./stories";
import "./App.css";
import Pagination from './pagination';

function Home() {

  return (
    <>
        <Search />
        <Stories />
        <Pagination />
       
    </>
  );
}

export default Home;


