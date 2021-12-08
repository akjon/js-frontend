import React from 'react'
import EditorMenu from './EditorMenu';

const Toolbar = ({ documentId, quill }) => {
  return (
    <div id="toolbar">
      <EditorMenu documentId={documentId} quill={quill} />
      <select className="ql-size">
        <option value="small"></option>
        <option defaultValue></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
      <select className="ql-color">
        <option value="black"></option>
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="yellow"></option>
        <option value="orange"></option>
        <option value="purple"></option>
      </select>
      <select className="ql-align">
        <option defaultValue></option>
        <option value="center"></option>
        <option value="right"></option>
      </select>
    </div>
  )
}

export default Toolbar
