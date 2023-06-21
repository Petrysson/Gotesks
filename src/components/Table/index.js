import { TableRow } from "./TableRow";

import './Table.css'


export function Table({ tasks }) {
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
                />
            ))
        }
      </tbody>
    </table>
  );
}
