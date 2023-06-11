export function saveTaskInLocalStorage(description, date, tasks){
    const newTask = {
        descricao: description,
        data: new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
        id: Math.floor( Math.random() * 2000 )
    }

    localStorage.setItem('@GoTasks', JSON.stringify([...tasks, newTask]));
}

export function getTasks(){
    return JSON.parse(localStorage.getItem('@GoTasks')) || [];
}