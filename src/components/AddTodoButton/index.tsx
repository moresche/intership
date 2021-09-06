import { useModal } from "../../providers/Modal";
import { Container } from "./styles";

export const AddTodoButton = () => {
    const { setOpenModal, setModalType } = useModal();

    const handleClick = () => {
        setOpenModal(true);
        setModalType("add");
    };

    return (
        <Container>
            <input type="button" value="New" onClick={() => handleClick()} />
        </Container>
    );
};
