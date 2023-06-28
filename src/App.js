import { useState, useEffect } from "react";

import { saveTaskInLocalStorage, getTasks, removeTaskInLocalStorage } from "./Storage";
import "./css/index.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/button";
import { TaskCounter } from "./components/TaskCounter";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";


function App() {

  const [tasks, setTasks] = useState([]);
  const [tasksCounter, setTasksCouter] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');


  const [showModal, setShowModal] = useState(false);

  //Função que carrega as tarefas adicionadas no localStorage
  function loadTasks(){
    const allTasks = getTasks();

    if(allTasks.length === 0){
      setStatusMessage('Você não tem tarefas');
    } else{
      setStatusMessage();
    }

    setTasksCouter(allTasks.length);
    setTasks(allTasks);
  }

  // funçao para criar uma tarefa e pegar os valores de um input 
  function createTask(description, date){
    if(!description || !date){
      alert('Preencha todos os campos');
      return;
    }

    saveTaskInLocalStorage(description, date, tasks);
    loadTasks();
    setShowModal(false)
  }

  function closeModal(){
    setShowModal(false)
  }

  //função que dará vida ao icone da lixeira.
  //essa função vai servir para excluir uma tarefa
  function removeTask(id){
    removeTaskInLocalStorage(id, tasks);
    loadTasks();
  }
 

  useEffect(() => {
    loadTasks();
  }, [])

  return (
    <>
      <div className="container">
        <Header />

        <main className="content">
          <div className="main-header">
            <Button
              onClick={() => setShowModal(true)}
              className="btn-new-Task"
              title="+ Nova tarefa"
            />

            <TaskCounter tasks={ tasksCounter } />
            
          </div>

          <Table
           tasks = { tasks }
           removeTask = { removeTask }
          />

          <h3 className="status-message"> { statusMessage } </h3>
        </main>

        <Footer />
      </div>

      {
        showModal &&(
          <Modal
            closeModal={closeModal}
            createTask = { createTask }
          />
        )
      }
    </>
  );
}

export default App;
