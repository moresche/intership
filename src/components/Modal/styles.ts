import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--transparent-bg);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;

    div.add,
    div.remove {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: var(--modal-bg);
        width: 28%;
        height: 200px;
        min-width: 230px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 0 10px white;
        position: relative;

        h1 {
            font-family: "Courier New", Courier, monospace;
            color: var(--main-red);
            margin: 0;
        }

        input.close {
            cursor: pointer;
            font-size: 1.15rem;
            position: absolute;
            top: -25px;
            right: -25px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 2px solid black;
            background: red;
            color: var(--main-white);
        }

        input.close:hover,
        input.btn:hover {
            transition: 0.3s;
            filter: brightness(80%);
        }

        input.text-field {
            padding-left: 10px;
            border-style: none;
            border-radius: 10px;
            height: 40px;
            width: 60%;
            font-size: 1rem;
        }

        input.btn {
            cursor: pointer;
            background-color: var(--main-red);
            border-style: none;
            border-radius: 10px;
            height: 40px;
            width: 62%;
            color: var(--main-white);
            font-size: 1.3rem;
        }
    }

    div.remove {
        p {
            font-size: 1.4rem;
        }

        div.btns {
            display: flex;

            input {
                cursor: pointer;
                background-color: var(--main-red);
                border-style: none;
                border-radius: 10px;
                height: 40px;
                width: 80px;
                color: var(--main-white);
                font-size: 1.3rem;
            }

            input:not(:first-child) {
                margin-left: 10px;
                background-color: var(--main-white);
                color: var(--main-black);
            }

            input:hover {
                transition: 0.3s;
                filter: brightness(70%);
            }
        }
    }
`;
