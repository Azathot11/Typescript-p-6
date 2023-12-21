import React, { FC, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export type ModalHandle = {
    open: () => void;
};

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
};

const Modal: FC<ModalProps & React.RefAttributes<ModalHandle>> = forwardRef((
    { children, onClose },
    ref
) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
        open: () => {
            dialog.current?.showModal();
        },
    }));

    return createPortal(
        <dialog ref={dialog} className="modal" onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById('modal-root')!
    );
});

export default Modal;