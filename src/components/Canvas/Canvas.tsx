/** @jsxImportSource react */

import React, { useEffect, useRef } from 'react'
import * as fabric from 'fabric' // v6

interface CanvasProps {
  width: number
  height: number
  title: string
  subtitle: string
  backgroundColor: string
  backgroundImage?: string
  onChange?: (canvas: fabric.Canvas) => void
}

const Canvas: React.FC<CanvasProps> = ({
  width,
  height,
  title,
  subtitle,
  backgroundColor,
  backgroundImage,
  onChange
}) => {
  const canvasEl = useRef<any>(null)

  useEffect(() => {
    const options = {
      backgroundColor,
      width,
      height
    }

    const canvas = new fabric.Canvas(canvasEl.current, options)

    const titleObj = new fabric.Text(title, {
      fontSize: 40,
      top: 80
    })

    titleObj.left = width / 2 - titleObj.width / 2

    const subTitleObj = new fabric.Text(subtitle, { fontSize: 30, top: 120 })

    subTitleObj.left = width / 2 - subTitleObj.width / 2

    canvas.add(titleObj)
    canvas.add(subTitleObj)

    if (backgroundImage) {
      fabric.Image.fromURL(backgroundImage).then(img => {
        img.scaleX = width / img.width
        img.scaleY = height / img.height
        canvas.backgroundImage = img
        canvas.renderAll()
      })
    }

    onChange && onChange(canvas)

    // make the fabric.Canvas instance available to your app
    // updateCanvasContext(canvas)
    return () => {
      // updateCanvasContext(null)
      canvas.dispose()
    }
  }, [width, height, title, subtitle, backgroundColor, backgroundImage])

  return <canvas ref={canvasEl} style={{ border: '1px solid #000' }}></canvas>
}

export default Canvas
