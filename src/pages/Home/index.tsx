import { TodoFilters } from "../../components/TodoFilters";
import { TodoList } from "../../components/TodoList";
import { useModal } from "../../providers/Modal";
import { Modal } from "../../components/Modal";

export const Home = () => {
    const { openModal } = useModal();

    return (
        <>
            <TodoFilters />
            <TodoList />
            {openModal && <Modal />}
        </>
    );
};
