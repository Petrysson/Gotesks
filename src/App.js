import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/button";
import { TaskCounter } from "./components/TaskCounter";
import { Table } from "./components/Table";

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
            title="+ Nova tarefa"
          />

          <TaskCounter Tasks={1} />
        </div>

        <Table />
      </main>

      <Footer />
    </div>
  );
}

export default App;
