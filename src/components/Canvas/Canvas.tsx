/** @jsxImportSource react */

import React, { useEffect, useRef } from 'react'
import * as fabric from 'fabric' // v6

interface CanvasProps {
  title: string
  subtitle: string
  backgroundColor: string
  onChange?: (canvas: fabric.Canvas) => void
}

const Canvas: React.FC<CanvasProps> = ({ title, subtitle, backgroundColor, onChange }) => {
  const canvasEl = useRef<any>(null)
  const canvasWidth = 400
  const canvasHeight = 300

  useEffect(() => {
    const options = {
      backgroundColor
    }

    const canvas = new fabric.Canvas(canvasEl.current, options)

    const titleObj = new fabric.Text(title, {
      fontSize: 40,
      top: 80
    })

    titleObj.left = canvasWidth / 2 - titleObj.width / 2

    const subTitleObj = new fabric.Text(subtitle, { fontSize: 30, top: 120 })

    subTitleObj.left = canvasWidth / 2 - subTitleObj.width / 2

    canvas.add(titleObj)
    canvas.add(subTitleObj)

    onChange && onChange(canvas)

    //  fabric 导出当前 canvas 为 jpg 图片
    // const dataUrl = canvas.toDataURL({
    //   format: 'jpeg',
    //   quality: 1
    // })
    // console.log(dataUrl)

    // make the fabric.Canvas instance available to your app
    // updateCanvasContext(canvas)
    return () => {
      // updateCanvasContext(null)
      canvas.dispose()
    }
  }, [title, subtitle, backgroundColor])

  return (
    <canvas
      ref={canvasEl}
      width={canvasWidth}
      height={canvasHeight}
      style={{ border: '1px solid #000' }}
    ></canvas>
  )
}

export default Canvas
