import { FaTrash } from 'react-icons/fa'

export function TableRow({ task }){
    return(
        <tr>
        <td>{task.description}</td>
        <td>{task.date}</td>
        <td>
          <FaTrash size={20} color='#de3f4e' className='icon-delete' />
        </td>
      </tr>
    )
}