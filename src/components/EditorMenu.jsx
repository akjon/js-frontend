import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Create from './Create';
import Update from './Update';
import Read from './Read';

const closeIcon = <FontAwesomeIcon icon={faTimes} />;

Modal.setAppElement('#root');
const EditorMenu = ({ documentId, quill }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const createDialog = (
    <Create
      documentId={documentId}
      quill={quill}
      closeDialog={() => toggler()}
    />
  );
  const updateDialog = (
    <Update
      documentId={documentId}
      quill={quill}
      closeDialog={() => toggler()}
    />
  );
  const readDialog = (
    <Read documentId={documentId} quill={quill} closeDialog={() => toggler()} />
  );

  const toggler = (content) => {
    setShowDialog((prev) => !prev);
    setDialogContent(content);
  };

  return (
    <div className="menu">
      <button onClick={() => toggler(createDialog)}>Create</button>
      <button onClick={() => toggler(readDialog)}>Read</button>
      <button onClick={() => toggler(updateDialog)}>Update</button>

      <Modal
        className="dialog"
        overlayClassName="overlay"
        isOpen={showDialog}
        onRequestClose={() => toggler()}
      >
        {dialogContent}
        <button onClick={() => toggler()} className="dialog-btn-close">
          {closeIcon}
        </button>
      </Modal>
    </div>
  );
};

export default EditorMenu;
