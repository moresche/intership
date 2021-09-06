import { useContext, createContext, useState } from "react";
import { IModalContextProps } from "../../@types/Context";
import { IProvidersProps } from "../../@types/Providers";

const ModalContext = createContext<IModalContextProps>(
    {} as IModalContextProps
);

export const ModalProvider = ({ children }: IProvidersProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [modalType, setModalType] = useState<string>("");

    return (
        <ModalContext.Provider value={{ openModal, setOpenModal, modalType, setModalType }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
