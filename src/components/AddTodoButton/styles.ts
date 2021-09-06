import styled from "styled-components";

export const Container = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: center;

    input {
        cursor: pointer;
        border: none;
        border-radius: 90%;
        width: 65px;
        height: 65px;
        font-size: 1.5rem;
        background: var(--main-red);
        color: var(--main-white);
    }

    input:hover {
        transition: 0.25s;
        filter: brightness(80%);
    }
`;
