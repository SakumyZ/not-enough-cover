/** @jsxImportSource react */

import React, { useEffect, useRef } from 'react'
import * as fabric from 'fabric' // v6

interface CanvasProps {
  title: string
  subtitle: string
}

const Canvas: React.FC<CanvasProps> = ({ title, subtitle }) => {
  const canvasEl = useRef<any>(null)

  useEffect(() => {
    const options = {}
    const canvas = new fabric.Canvas(canvasEl.current, options)

    const titleObj = new fabric.Text(title, {})

    // canvas.add(rect)
    canvas.add(titleObj)

    // make the fabric.Canvas instance available to your app
    // updateCanvasContext(canvas)
    return () => {
      // updateCanvasContext(null)
      canvas.dispose()
    }
  }, [title, subtitle])

  return (
    <canvas ref={canvasEl} width={400} height={300} style={{ border: '1px solid #000' }}></canvas>
  )
}

export default Canvas
