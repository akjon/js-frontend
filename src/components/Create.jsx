import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

const Create = ({ closeDialog, quill }) => {
  const [title, setTitle] = useState('');
  const newDocument = { _id: uuidV4(), name: title, data: quill.getContents() }
  const url = 'https://jsramverk-editor-joka20.azurewebsites.net/editor/'

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newDocument)
    }).then(() => {
      closeDialog()
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new document</h2>
      <p>
        This will create a new document in the database.
        It will be saved with a generated ID, current content
        and a name of your choice.
      </p>
      <input
        autoFocus
        placeholder="Enter new document name"
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="dialog-submit"
      >Create
      </button>
      <button
        type="reset"
        className="dialog-cancel"
        onClick={closeDialog}
      >Cancel</button>
    </form >
  )
}

export default Create
