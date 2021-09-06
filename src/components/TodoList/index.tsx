import { useModal } from "../../providers/Modal";
import { useTodo } from "../../providers/Todo";
import { ITodoProps } from "../../@types/Todo";
import { AiFillDelete } from "react-icons/ai";
import { Container } from "./styles";

export const TodoList = () => {
    const {
        isFiltered,
        updateAchieved,
        pendingTodos,
        completedTodos,
        setTodoToBeDeleted,
    } = useTodo();

    const { setModalType, setOpenModal } = useModal();

    const handleClick = (todo: ITodoProps) => {
        setOpenModal(true);
        setModalType("remove");
        setTodoToBeDeleted(todo);
    };

    return (
        <Container>
            <ul>
                {isFiltered ? (
                    <>
                        <h1>TO-DO ✔️</h1>
                        {completedTodos.map((todo, index) => {
                            return (
                                <li key={index}>
                                    <input
                                        type="checkbox"
                                        checked={todo.achieved}
                                        onChange={() => updateAchieved(todo)}
                                    />
                                    <span>{todo.name}</span>
                                    <AiFillDelete
                                        onClick={() => handleClick(todo)}
                                    />
                                </li>
                            );
                        })}
                    </>
                ) : (
                    <>
                        <h1>TO-DO 📋</h1>
                        {pendingTodos.map((todo, index) => {
                            return (
                                <li key={index}>
                                    <span>{todo.name}</span>
                                    <input
                                        type="checkbox"
                                        checked={todo.achieved}
                                        onChange={() => updateAchieved(todo)}
                                    />
                                </li>
                            );
                        })}
                    </>
                )}
            </ul>
        </Container>
    );
};
