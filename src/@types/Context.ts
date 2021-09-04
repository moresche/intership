import { ITodoProps } from "./Todo";

export interface IContextProps {
    todoList: ITodoProps[];
    addTodo: (todo: ITodoProps) => void;
    removeTodo: (todo: ITodoProps) => void;
    updateAchieved: (todo: ITodoProps) => void;
}
