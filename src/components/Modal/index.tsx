import React, { PropsWithChildren } from 'react';
import './styles.css';

type ModalProps = PropsWithChildren & {
  visible: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, visible, onClose }) => {
  return (
    <div className={`modal-wrapper ${visible ? 'visible-modal' : ''}`}>
      <div className="modal">
        <button className="close-modal" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
