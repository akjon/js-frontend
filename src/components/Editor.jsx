import React, { useCallback, useEffect, useState } from 'react'
import Quill from 'quill'
import { useParams } from 'react-router-dom'
import 'quill/dist/quill.snow.css'

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
  const Menu = () => (
    <div className="menu">
      <button>New</button>
      <button>Save</button>
      <button>Load</button>
    </div>
  )

  const { id: documentId } = useParams()
  const [quill, setQuill] = useState()

  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null) return

    wrapper.innerHTML = ""
    const editor = document.createElement("div")
    wrapper.append(editor)
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: toolbarOptions }
    })
    q.enable()
    setQuill(q)
    q.on('selection-change', function(range) {
      console.log('selection-change', range)
    });
    q.on('text-change', function(delta, source) {
      console.log('text-change', delta, source)
    });
  }, [])
  return (
    <>
      <Menu />
      <div className="app" ref={wrapperRef}>
      </div>
    </>
  )
}