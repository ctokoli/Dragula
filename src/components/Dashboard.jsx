/* eslint-disable no-unused-vars */
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { RiUploadCloud2Fill } from 'react-icons/ri';

const Dashboard = () => {
    const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return ( 
        <>
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
        </>
     );
}
 
export default Dashboard;