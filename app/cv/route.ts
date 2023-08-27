import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

const url = 'https://github.com/pavelzw/cv/releases/latest/download/english.pdf'
const maxAge = 2 * 60 * 60 * 1000

let cache: ArrayBuffer | null = null
let cacheTime: Date | null = null

const fetchCV = async () =>
  fetch(url)
    .then((res) => res.arrayBuffer())
    .then((data) => {
      console.debug('fetched cv')
      cache = data
      cacheTime = new Date()
      return data
    })

const createResponse = (data: ArrayBuffer) => {
  // github returns it as an application/octet-stream so we need to set the content-type
  // to application/pdf to make sure the browser knows how to render it
  const response = new NextResponse(data)
  response.headers.set('content-type', 'application/pdf')
  response.headers.set('content-disposition', 'inline; filename=cv.pdf')
  return response
}

const handler = () => {
  const currentTime = new Date()

  if (!cache || !cacheTime || currentTime.getTime() - cacheTime.getTime() > maxAge) {
    return fetchCV()
      .then(createResponse)
      .catch((error) => {
        console.error(error)
        redirect(url)
      })
  }

  return Promise.resolve(createResponse(cache))
}

export const GET = handler
