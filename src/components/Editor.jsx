import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Toolbar from './Toolbar';

const Editor = () => {
  const { id: documentId } = useParams();
  const [quill, setQuill] = useState();

  // Wrapper function to make sure no extra quill
  // components render when developing. Saving and reloading.
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    const quillEditor = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: '#toolbar'
      }
    });
    quillEditor.enable();
    setQuill(quillEditor);
  }, []);

  return (
    <>
      <Toolbar documentId={documentId} quill={quill} />
      <div className="app" ref={wrapperRef}></div>
    </>
  );
}

export default Editor
