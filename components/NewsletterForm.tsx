'use client'

import { useRef, useState } from 'react'

type NewsletterFormProps = {
  title?: string
  username: string
}

const NewsletterForm = ({
  title = 'Subscribe to the newsletter',
  username,
}: NewsletterFormProps) => {
  const inputEl = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = () => {
    window.open(
      `https://tinyletter.com/${username}`,
      'popupwindow',
      'scrollbars=yes,width=800,height=600'
    )
    setSubscribed(true)
    if (inputEl.current && inputEmail.current) {
      inputEmail.current.value = inputEl.current.value
      inputEl.current.value = ''
    } else {
      throw new Error('Something went wrong with the newsletter form.')
    }
  }

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <form
        className="flex flex-col sm:flex-row"
        action={`https://tinyletter.com/${username}`}
        method="post"
        target="popupwindow"
        onSubmit={subscribe}
      >
        <input type="hidden" value="" name="email" ref={inputEmail} />
        <div>
          <label htmlFor="email-input">
            <span className="sr-only">Email address</span>
            <input
              autoComplete="email"
              className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="email-input"
              placeholder={subscribed ? "You're subscribed! 🎉" : 'Enter your email'}
              required
              ref={inputEl}
              type="email"
              disabled={subscribed}
            />
          </label>
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0">
          <button
            className={`w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white sm:py-0 ${
              subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
            } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Sign up'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsletterForm
