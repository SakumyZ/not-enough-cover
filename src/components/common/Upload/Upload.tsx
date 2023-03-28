/** @jsxImportSource react */

import React from 'react'
import { useDropzone } from 'react-dropzone'
import Button from '@mui/material/Button'

interface UploadProps {
  children?: React.ReactNode
  onBeforeUpload?: (files: File[]) => boolean | Promise<File>
}

export const Upload: React.FC<UploadProps> = ({ children, onBeforeUpload }) => {
  const { getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDropAccepted(files) {
      onBeforeUpload && onBeforeUpload(files)
    }
  })

  // const files = acceptedFiles.map(file => (
  //   <li key={file.name}>
  //     {file.name} - {file.size} bytes
  //   </li>
  // ))

  return (
    <div className="container">
      {/* <div {...getRootProps({ className: 'dropzone' })}> */}
      <input {...getInputProps()} />
      <Button onClick={open}>{children}</Button>
      {/* </div> */}
    </div>
  )
}

export default Upload
