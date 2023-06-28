import { TableRow } from "./TableRow";

import './Table.css'


export function Table({ tasks, removeTask }) {
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
            tasks.map(task => (
                <TableRow 
                key={task.id }
                task = { task }
                removeTask = { removeTask }
                />
            ))
        }
      </tbody>
    </table>
  );
}
