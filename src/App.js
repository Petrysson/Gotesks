import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/button";
import { TaskCounter } from "./components/TaskCounter";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

import "./css/index.css";

function App() {
  

  const [showModal, setShowModal] = useState(false);

  // funçao para criar uma tarefa e pegar os valores de um input 
  function createTask(description, date){
    if(!description || !date){
      alert('Preencha todos os inputs')
      return;
    }
  }

  function closeModal(){
    setShowModal(false)
  }

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

            <TaskCounter Tasks={1} />
          </div>

          <Table />
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
