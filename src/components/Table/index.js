import { TableRow } from "./TableRow";

import './Table.css'
const tasks = [
    {
        id:1,
        Description: "Estudar JavaScript",
        date: '21/03/2023'
    }
]

export function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição de tarefas</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {
            tasks.map(tasks => (
                <TableRow 
                key={tasks.id }
                tasks = { tasks }
                />
            ))
        }
      </tbody>
    </table>
  );
}
