import React, { useState } from 'react';
import useFetch from '../useFetch';

const Update = ({ closeDialog, quill }) => {
  const [currentId, setCurrentId] = useState(null);
  const updatedData = { data: quill.getContents() };
  const url = 'https://jsramverk-editor-joka20.azurewebsites.net/editor/';
  const { data, isPending, error } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentId);
    fetch(url + currentId, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedData)
    }).then(() => {
      closeDialog();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <h2>Select document to update</h2>
      <p>
        Select an existing document to update with the current editor content.
      </p>
      {data && (
        <select
          defaultValue={'default'}
          onChange={(e) => setCurrentId(e.target.value)}
          className="load-option"
        >
          <option disabled hidden value="default">
            Choose document
          </option>
          {data.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name}
            </option>
          ))}
          ;
        </select>
      )}
      {!isPending && <button className="dialog-submit">Update</button>}
      {isPending && (
        <button className="dialog-submit" disabled>
          Updating...
        </button>
      )}

      <button className="dialog-cancel" onClick={closeDialog}>
        Cancel
      </button>
    </form>
  );
};

export default Update;
