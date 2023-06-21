export function TaskCounter({ tasks }) {
  return (
    <span className="total-tasks">
      <strong>{ tasks }</strong> Tarefas registradas
    </span>
  );
}
