import { useTodo } from "../../providers/Todo";
import { AddTodoButton } from "../AddTodoButton";
import { FiltersContainer } from "./styles";

export const TodoFilters = () => {
    const { setIsFiltered } = useTodo();

    return (
        <FiltersContainer>
            <input
                className="filter"
                type="button"
                value="All Tasks"
                onClick={() => setIsFiltered(false)}
            />
            <AddTodoButton />
            <input
                className="filter"
                type="button"
                value="Completed Tasks"
                onClick={() => setIsFiltered(true)}
            />
        </FiltersContainer>
    );
};
