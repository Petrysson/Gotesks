export function TableRow({ tasks }){
    return(
        <tr>
        <td>{tasks.Description}</td>
        <td>{tasks.date}</td>
        <td>X</td>
      </tr>
    )
}