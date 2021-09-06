import { IProvidersProps } from "../@types/Providers";
import { ModalProvider } from "./Modal";
import { TodoProvider } from "./Todo";

const Providers = ({ children }: IProvidersProps) => {
    return (
        <TodoProvider>
            <ModalProvider>{children}</ModalProvider>
        </TodoProvider>
    );
};

export default Providers;
