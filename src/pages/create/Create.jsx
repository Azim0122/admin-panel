
import React, { useRef, useEffect, useState } from 'react';
import './Create.css'

function Create({HandleClick, menuBtn, setMenuBtn}) {
    const [categoryName, setCategoryName] = useState("");
    const [categorySlug, setCategorySlug] = useState("");
    const [categoryIcon, setCategoryIcon] = useState(null);
    const [categoryOrder, setCategoryOrder] = useState(1);
    const [error, setError] = useState(false);
  
    const handleSubmit = () => {
      if (!categoryName) {
        setError(true);
        return;
      }
      console.log({
        categoryName,
        categorySlug,
        categoryIcon,
        categoryOrder,
      });
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setCategoryIcon(file);
    };
  

  return (
    <section className={menuBtn ? 'hide' : ''} id='content'>
        <main>
        <div className="container2">
      <h2 className="title">Create Category</h2>
      <div className="form-group">
        <label className="label">Category Name</label>
        <input
          type="text"
          className={`input ${error ? "error" : ""}`}
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
            setError(false);
          }}
        />
        {error && <p className="error-text">This value is required.</p>}
      </div>
      <div className="form-group">
        <label className="label">Category Slug</label>
        <input
          type="text"
          className="input"
          value={categorySlug}
          onChange={(e) => setCategorySlug(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Category Icon</label>
        <div className="drop-zone">
          <input
            type="file"
            id="file-upload"
            className="file-input"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload" className="drop-zone-label">
            {categoryIcon ? categoryIcon.name : "Drop image here or click to upload"}
          </label>
        </div>
      </div>
      <div className="form-group">
        <label className="label">Category Order</label>
        <input
          type="number"
          className="input"
          value={categoryOrder}
          onChange={(e) => setCategoryOrder(Number(e.target.value))}
        />
      </div>
      <button className="button" onClick={handleSubmit}>
        Create
      </button>
    </div>
        </main>
    </section>
  )
}

export default Create