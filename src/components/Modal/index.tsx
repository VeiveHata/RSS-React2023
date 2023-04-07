import React, { PropsWithChildren } from 'react';
import './styles.css';
import { ConditionalRender } from 'components/ConditionalRender';

type ModalProps = PropsWithChildren & {
  visible: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, visible, onClose }) => {
  return (
    <ConditionalRender condition={visible}>
      <div className="modal-wrapper">
        <div className="modal">
          <button className="close-modal" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </ConditionalRender>
  );
};
