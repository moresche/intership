import { useModal } from "../../providers/Modal";
import { useTodo } from "../../providers/Todo";
import { Container } from "./styles";
import { useState } from "react";

export const Modal = () => {
    const { setOpenModal, modalType, setModalType } = useModal();
    const { removeTodo, addTodo, todoToBeDeleted } = useTodo();
    const [inputValue, setInputValue] = useState<string>("");

    const todo = {
        name: inputValue,
        achieved: false,
    };

    const handleRemove = () => {
        removeTodo(todoToBeDeleted);
        setOpenModal(false);
        setModalType("");
    };

    const handleAdd = () => {
        addTodo(todo);
        setOpenModal(false);
        setModalType("");
    };

    return (
        <Container>
            {modalType === "add" ? (
                <div className="add">
                    <h1>Add Task</h1>
                    <input
                        type="button"
                        value="x"
                        className="close"
                        onClick={() => setOpenModal(false)}
                    />
                    <input
                        placeholder="description..."
                        type="text"
                        className="text-field"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <input
                        type="button"
                        className="btn"
                        value="Add"
                        onClick={() => handleAdd()}
                    />
                </div>
            ) : modalType === "remove" ? (
                <div className="remove">
                    <input
                        type="button"
                        value="x"
                        className="close"
                        onClick={() => setOpenModal(false)}
                    />
                    <p>Do you really want to delete this task?</p>
                    <div className="btns">
                        <input
                            type="button"
                            value="Yes"
                            onClick={() => handleRemove()}
                        />
                        <input
                            type="button"
                            value="No"
                            onClick={() => setOpenModal(false)}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </Container>
    );
};
