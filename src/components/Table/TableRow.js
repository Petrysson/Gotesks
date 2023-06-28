import { FaTrash } from 'react-icons/fa'

export function TableRow({ task, removeTask }){
    return(
        <tr>
        <td>{task.description}</td>
        <td>{task.date}</td>
        <td onClick={() => removeTask(task.id)}>
          <FaTrash size={20} color='#de3f4e' className='icon-delete' />
        </td>
      </tr>
    )
}