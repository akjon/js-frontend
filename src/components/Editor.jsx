import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import EditorMenu from './EditorMenu'

let toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'direction': 'rtl' }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
];

export default function Editor() {
  const { id: documentId } = useParams()
  const [quill, setQuill] = useState()

  // Wrapper function to make sure no extra quill
  // components render when developing. Saving and reloading.
  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null) return

    wrapper.innerHTML = ""
    const editor = document.createElement("div")
    wrapper.append(editor)
    const quillEditor = new Quill(editor, {
      theme: "snow",
      // modules: { toolbar: false }
      modules: { toolbar: toolbarOptions }
    })
    quillEditor.enable()
    setQuill(quillEditor)
  }, [])
  return (
    <>
      <EditorMenu
        documentId={documentId}
        quill={quill}
      />
      <div className="app" ref={wrapperRef}>
      </div>
    </>
  )
}
