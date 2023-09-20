/* eslint-disable no-unused-vars */
import React, {useCallback, useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { database } from "../FirebaseConfig";
import { useNavigate} from "react-router-dom";
import cuid from "cuid";
import {useDropzone} from 'react-dropzone'
import { RiUploadCloud2Fill } from 'react-icons/ri';
import DispalyImage from './DisplayImage';
import MenuBar from './Menu';

const Dashboard = () => {
    const [user, setUser] = useState('');

    const navHistory = useNavigate()
    useEffect(() => {
        const protect = onAuthStateChanged(database, (user) => {
    if(!user) {
      navHistory('/')
    } else {
      navHistory('/dashboard')
      setUser(user)
    }
  })
  protect
}, [navHistory]);
    
    

    const [images, setImages] = useState([]);
    const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  console.log(images)
  
    return ( 
        <>
            <MenuBar user={user} />
            <section className="upload-container">
                <div className="head-section">
                    <h1>Upload Files</h1>
                    <p>Upload files you want to share</p>
                </div>
                <div className="upload" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <div className="col drag">
                            <div className='drop-files'>
                                <h2>Drop files here</h2>
                            </div>
                        </div>
                        :
                        <div className="col">
                            <RiUploadCloud2Fill className='cloud' />
                            <p>Drag & Drop your file here</p>
                        </div>
                    }
                    
                    <div className='file-list'>
                        <h2>Files List</h2>
                    </div>
                </div>
            </section>
            <section className="display-images">
                {images.map((image) => (
                   <DispalyImage data={image} key={image.id} />
                ))}
            </section>
        </>
     );
}
 
export default Dashboard;