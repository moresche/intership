import styled from "styled-components";

export const Container = styled.div`
    ul {
        height: 100%;
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin-top: 0;
        }

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-radius: 25px;
            max-width: 700px;
            padding: 1rem;
            width: 80%;
            min-width: 280px;
            background: var(--modal-bg);

            svg {
                height: 200px;
                color: var(--main-red);
            }

            svg:hover {
                transition: 0.25s;
                filter: brightness(80%);
            }

            span {
                font-size: 1.4rem;
            }

            svg,
            input {
                cursor: pointer;
                height: 30px;
                width: 30px;
            }
        }
    }
`;
