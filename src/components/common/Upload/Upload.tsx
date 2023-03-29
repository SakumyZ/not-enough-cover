/** @jsxImportSource react */

import React from 'react'
import { useDropzone } from 'react-dropzone'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

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

  return (
    <Box className="container" display="flex" alignItems="flex-end" height="100%">
      {/* <div {...getRootProps({ className: 'dropzone' })}> */}
      <input {...getInputProps()} />
      <Button onClick={open}>{children}</Button>
      {/* </div> */}
    </Box>
  )
}

export default Upload
