import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusCircle, faCloudUploadAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Create from './Create';
import Update from './Update';
import Read from './Read';

const closeIcon = <FontAwesomeIcon icon={faTimes} />;
const createIcon = <FontAwesomeIcon icon={faPlusCircle} />;
const readIcon = <FontAwesomeIcon icon={faCloudDownloadAlt} />;
const updateIcon = <FontAwesomeIcon icon={faCloudUploadAlt} />;

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
    <>
      <button className="ql-picker" onClick={() => toggler(createDialog)}>{createIcon}</button>
      <button className="ql-picker" onClick={() => toggler(readDialog)}>{readIcon}</button>
      <button className="ql-picker" onClick={() => toggler(updateDialog)}>{updateIcon}</button>

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
    </>
  );
};

export default EditorMenu;
