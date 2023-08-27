import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

const handler = async () => {
  // github returns it as an application/octet-stream so we need to set the content-type
  // to application/pdf to make sure the browser knows how to render it
  const url = 'https://github.com/pavelzw/cv/releases/latest/download/english.pdf'
  return fetch(url)
    .then(async (res) => res.arrayBuffer())
    .then((data) => {
      const response = new NextResponse(data)
      response.headers.set('content-type', 'application/pdf')
      response.headers.set('content-disposition', 'inline; filename=cv.pdf')
      return response
    })
    .catch((err) => {
      console.error(err)
      redirect(url)
    })
}

export const GET = handler
