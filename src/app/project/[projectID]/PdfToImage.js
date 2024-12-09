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

  return <canvas id="theCanvas"></canvas>
}

export default PdfToImage
