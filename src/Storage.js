export function saveTaskInLocalStorage(description, date, tasks){
    const newTask = {
        description: description,
        date: new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
        id: Math.floor( Math.random() * 2000 )
    }

    localStorage.setItem('@GoTasks', JSON.stringify([...tasks, newTask]));
}

export function removeTaskInLocalStorage(id, tasks){
    /*A const filteredTask vai filtrar o Array de tarefa dentro do LocalStorage.
    cada tarefa ela vai ter que ter a seguinte comparação, ( se o ID da tarefa atual for diferente do ID que eu estou recebendo por parametro,
    quero manter ele no filteredTask, caso contrario ele vai jogar a terefa que tem o Id igual para fora ).
    */

    const filteredTask = tasks.filter(task => task.id !== id );
    localStorage.setItem('@GoTasks', JSON.stringify(filteredTask));
}

export function getTasks(){
    return JSON.parse(localStorage.getItem('@GoTasks')) || [];
}