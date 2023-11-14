import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header'
import { Tasks } from './Tasks'
import CreateTask from './CreateTask'
//import { getAllTasks, deleteTask, fetchSettings } from '../services/TodoService'

function Home() {

  const [tasks, setTasks] = useState([])
  const [numberOfTasks, setNumberOfTasks] = useState([])
  const [isTaskEdited, setTaskEdited] = useState(false)
  const [appSettings, setAppSettings] = useState({});


  useEffect( () => {
    async function fetchData() {
      const response = await fetchSettings();
    
      setAppSettings(response);
    }
    fetchData();
    
  },[])
   

  function taskCreated() {
    setNumberOfTasks(numberOfTasks + 1)
  }

  function taskEdited(res) {
     setTaskEdited(res)
  }
    
  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
              <CreateTask taskCreated={taskCreated}></CreateTask>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        
      </div>
    </div>
  );
}

export default Home;
