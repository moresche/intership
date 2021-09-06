import { ITodoProps } from "./Todo";
import { Dispatch } from "react";

export interface ITodoContextProps {
    todoList: ITodoProps[];
    addTodo: (todo: ITodoProps) => void;
    removeTodo: (todoToBeDeleted: ITodoProps) => void;
    updateAchieved: (todo: ITodoProps) => void;
    pendingTodos: ITodoProps[];
    completedTodos: ITodoProps[];
    isFiltered: boolean;
    setIsFiltered: Dispatch<React.SetStateAction<boolean>>;
    todoToBeDeleted: ITodoProps;
    setTodoToBeDeleted: Dispatch<React.SetStateAction<ITodoProps>>;
}

export interface IModalContextProps {
    openModal: boolean;
    setOpenModal: Dispatch<React.SetStateAction<boolean>>;
    modalType: string;
    setModalType: Dispatch<React.SetStateAction<string>>;
}
