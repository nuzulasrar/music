'use client'

import React, { useEffect, useState } from 'react'
// import * as pdfjsLib from 'pdfjs-dist'
// import * as pdfjsLib from 'pdfjs-dist'
import * as pdfjsLib from 'pdfjs-dist/webpack.mjs'
import Image from 'next/image'

import 'pdfjs-dist/build/pdf.worker.mjs'
// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

const PdfToImage = ({ pdfUrl }) => {
  const [thisImage, setThisImage] = useState('')
  const pdfinit = async () => {
    // pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
    //   pdf.getPage(1).then((page) => {
    //     const scale = 1
    //     const canvas = document.createElement('canvas')
    //     const context = canvas.getContext('2d')
    //     const viewport = page.getViewport({ scale })
    //     canvas.width = viewport.width
    //     canvas.height = viewport.height

    //     const renderContext = {
    //       canvasContext: context,
    //       viewport: viewport,
    //     }
    //     page.render(renderContext)

    //     const jpgImage = canvas.toDataURL('image/jpeg')
    //     setThisImage(jpgImage)
    //     console.log('thejpgimage', jpgImage)
    //   })
    // })
    const loadingTask = pdfjsLib.getDocument(pdfUrl)
    const pdfDocument = await loadingTask.promise
    // Request a first page
    const pdfPage = await pdfDocument.getPage(1)
    // Display page on the existing canvas with 100% scale.
    const viewport = pdfPage.getViewport({ scale: 1.0 })
    const canvas = document.getElementById('theCanvas')
    canvas.width = viewport.width
    canvas.height = viewport.height
    const ctx = canvas.getContext('2d')
    const renderTask = pdfPage.render({
      canvasContext: ctx,
      viewport,
    })
    await renderTask.promise
  }
  useEffect(() => {
    pdfinit()
  }, [])

  //   return <h1>{thisImage}</h1>
  return <canvas id="theCanvas"></canvas>
  //   return <Image src={thisImage} width={100} height={100} />
}

export default PdfToImage
