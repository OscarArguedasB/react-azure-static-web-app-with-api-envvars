import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header'
//import { getAllTasks, deleteTask, fetchSettings } from '../services/TodoService'

function Home() {
    
  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
              <p>Hola<p>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        
      </div>
    </div>
  );
}

export default Home;
