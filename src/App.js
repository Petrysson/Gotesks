import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/button";
import { TaskCounter } from "./components/TaskCounter";


import "./css/index.css";

function App() {
  return (
    <div className="container">
      <Header />

      <main className="content">
        <div className="main-header">
          <Button 
           onclick={() => {}}
           className="btn-new-Task"
           title='+ Nova tarefa'
          />
        </div>

        <TaskCounter Tasks={10}/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
