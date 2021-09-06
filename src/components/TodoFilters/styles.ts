import styled from "styled-components";

export const FiltersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0 20px 0;

    input.filter {
        cursor: pointer;
        border-radius: 20px;
        height: 40px;
        width: 10vw;
        min-width: 105px;
        font-size: 1rem;
    }

    input.filter:hover {
        transition: 0.25s;
        filter: brightness(90%);
    }
`;
