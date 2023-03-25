import { FaTrash } from 'react-icons/fa'

export function TableRow({ tasks }){
    return(
        <tr>
        <td>{tasks.Description}</td>
        <td>{tasks.date}</td>
        <td>
          <FaTrash size={20} color='#de3f4e' className='icon-delete' />
        </td>
      </tr>
    )
}