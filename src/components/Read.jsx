import React, { useState } from 'react';
import useFetch from '../useFetch';

const Read = ({ closeDialog, quill }) => {
  const [currentId, setCurrentId] = useState(null);
  const url = 'https://jsramverk-editor-joka20.azurewebsites.net/editor/';
  const { data, isPending, error } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    data.map((doc) => {
      if (doc._id == currentId) {
        quill.setContents(doc.data);
      }
    });
    closeDialog();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <h2>Select document to load</h2>
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
      {!isPending && <button className="dialog-submit">Load</button>}
      {isPending && (
        <button className="dialog-submit" disabled>
          Loading...
        </button>
      )}

      <button className="dialog-cancel" onClick={closeDialog}>
        Cancel
      </button>
    </form>
  );
};

export default Read;
