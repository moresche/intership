import { useContext, createContext, useState } from "react";
import { IProvidersProps } from "../../@types/Providers";
import { ITodoContextProps } from "../../@types/Context";
import { ITodoProps } from "../../@types/Todo";

const TodoContext = createContext<ITodoContextProps>({} as ITodoContextProps);

export const TodoProvider = ({ children }: IProvidersProps) => {
    const [todoList, setTodoList] = useState<ITodoProps[]>([]);
    const [isFiltered, setIsFiltered] = useState<boolean>(false);

    const [todoToBeDeleted, setTodoToBeDeleted] = useState<ITodoProps>({
        name: "",
        achieved: false,
    });

    const addTodo = (todo: ITodoProps) => {
        setTodoList([...todoList, todo]);
    };

    const removeTodo = (todoToBeDeleted: ITodoProps) => {
        const newList = todoList.filter(
            (todo) => todo.name !== todoToBeDeleted.name
        );

        setTodoList(newList);
    };

    const updateAchieved = (todoToBeUpdated: ITodoProps) => {
        const newList = [...todoList];

        newList.map((todo) =>
            todo === todoToBeUpdated ? (todo.achieved = !todo.achieved) : todo
        );

        setTodoList(newList);
    };

    const pendingTodos = todoList.filter((todo) => todo.achieved === false);

    const completedTodos = todoList.filter((todo) => todo.achieved === true);

    return (
        <TodoContext.Provider
            value={{
                todoList,
                addTodo,
                removeTodo,
                updateAchieved,
                pendingTodos,
                completedTodos,
                isFiltered,
                setIsFiltered,
                todoToBeDeleted,
                setTodoToBeDeleted,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);
