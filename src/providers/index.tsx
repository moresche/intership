import { IProvidersProps } from "../@types/Providers";
import { TodoProvider } from "./Todo";

const Providers = ({ children }: IProvidersProps) => {
    return <TodoProvider>{children}</TodoProvider>;
};

export default Providers;
