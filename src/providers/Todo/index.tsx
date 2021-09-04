import { useContext, createContext, useState } from "react";
import { IProvidersProps } from "../../@types/Providers";
import { IContextProps } from "../../@types/Context";
import { ITodoProps } from "../../@types/Todo";

const TodoContext = createContext<IContextProps>({} as IContextProps);

export const TodoProvider = ({ children }: IProvidersProps) => {
    const [todoList, setTodoList] = useState<ITodoProps[]>([]);

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

        newList.splice(newList.indexOf(todoToBeUpdated));
        todoToBeUpdated.achieved = !todoToBeUpdated.achieved;
        newList.push(todoToBeUpdated);

        setTodoList(newList);
    };

    return (
        <TodoContext.Provider
            value={{ todoList, addTodo, removeTodo, updateAchieved }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);
