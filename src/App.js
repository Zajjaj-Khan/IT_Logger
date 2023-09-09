import React, {Fragment, useEffect } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js"
import './App.css';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModel from './components/logs/AddLogModel';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import Store from './Store';
const  App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  
  return (
    <Provider store ={Store}>
    <Fragment>
    <SearchBar/>
    <div className='container'>
      <AddBtn/>
      <AddLogModel/>
      <EditLogModal/>
      <AddTechModal/>
      <TechListModal/>
      <Logs/>

    </div>
    </Fragment>
    </Provider>
  )
}

export default App;
