import React, { useState } from 'react'
import './Gallery.css'
function Gallery({HandleClick, menuBtn, setMenuBtn}) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (event) => {
    const files = event.target.files;
    const allowedTypes = ['image/jpeg','zip', 'image/png','image/gif','video/MOV', 'video/mkv', 'application/pdf', 'video/mp4', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024;   
    if (!files || files.length === 0) {
      return;
    }
    for (let i = 0; i < files.length; i++) {
      if (!allowedTypes.includes(files[i].type)) {
        alert(`File type is not allowed: ${files[i].name}`);
        return;
      }
  
      if (files[i].size > maxSize) {
        alert(`File size is too large: ${files[i].name}`);
        return;
      }
    }
    const filteredFiles = [...files].filter(file => {
      return allowedTypes.includes(file.type) && file.size <= maxSize;
    });
  
    setSelectedFiles(prevFiles => [...prevFiles, ...filteredFiles]);
  };

  const DeleteFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
  <section className={menuBtn ? 'hide' : ''} id='content'>
  <main>
  <div class="head-title">
				<div class="left">
					<h1> Gallery pages.</h1>
					<ul class="breadcrumb">
						<li>
							<a href="/">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Gallery</a>
						</li>
					</ul>
				</div>
			</div>
  <div className="file-upload">
  <div className="upload-aboutt">
      <input type="file" multiple onChange={handleFileChange} />
      <div className="upload-about">
    <h4>Drop files here or click to upload</h4>
      <span>Allowed file types: JPEG, PNG, GIF, MP4, MOV, MKV, PDF, DOC, DOCX, XLS, XLSX</span> <br />
      <span>Maximum file size: 2 MB</span>
    </div>
    </div>
      <div className="file-list">
        {selectedFiles.map((file, index) => (
          <div key={index} className="file-item">  
          {file.type.startsWith('image/') ? (
            <img src={URL.createObjectURL(file)} alt={file.name} className="file-image" />
          ) : file.type.startsWith('application/pdf') ? (
            <span className="file-icon">PDF</span>
          ) : file.type.startsWith('application/msword') || file.type.startsWith('application/vnd.openxmlformats-officedocument.wordprocessingml.document') ? (
            <span className="file-icon">DOC</span>
          ) : file.type.startsWith('application/vnd.ms-excel') || file.type.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') ? (
            <span className="file-icon">XLS</span>
          ) : file.type.startsWith('video/mp4') || file.type.startsWith('video/quicktime') ? (
            <span className="file-icon">MP4</span>
          ) : file.type.startsWith('video/MOV') || file.type.startsWith('video/mkv') ? (
            <span className="file-icon">MOV</span>
          ) : (
            <span className="file-icon">...</span>
          ) }
  {/* ... */}
 
        <button className="delete-button"  onClick={() => DeleteFile(index)}><i class='bx bxs-trash'></i></button>
          </div>
        ))}
      </div>
    </div>
    
  </main>
  </section>


)}

export default Gallery