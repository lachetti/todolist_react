import { useState } from 'react';

const InputTask = ({ newTask }) => {
    const [userTask, setUserTask] = useState('');       // Состояние (строка, содержащая задачу)

    const applyTask = (e) => {                          // Действие по нажатию кнопки
        e.preventDefault();
        newTask(userTask);
        setUserTask('');
    }

    const changeInput = (e) => {                        // Изменение текста в поле ввода задачи
        setUserTask(e.currentTarget.value);
    }

    return (
        <form onSubmit={applyTask}>
            <input
                value={userTask}
                type="text"
                onChange={changeInput}
                placeholder="Добавьте задачу..."   
            />
            <button>Добавить</button>
        </form>
    );
}

export default InputTask;