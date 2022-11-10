import type { Props } from '@/pages/_error'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { lang } from '@/lib/lang'

const Page404 = ({ statusCode }: Props) => {
  const { locale } = useRouter()
  const t = lang[locale as 'zh' | 'en']
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 mb-8">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5113 5.44965C17.5113 8.13769 15.0884 10.3993 11.9926 10.3993C8.89686 10.3993 6.47394 8.13769 6.47394 5.44965C6.47394 2.7616 8.89686 0.5 11.9926 0.5C15.0884 0.5 17.5113 2.7616 17.5113 5.44965Z" stroke="currentColor" />
                  <path d="M11.5374 14.6283C11.5374 17.3164 9.11446 19.578 6.01869 19.578C2.92292 19.578 0.5 17.3164 0.5 14.6283C0.5 11.9403 2.92292 9.67868 6.01869 9.67868C9.11446 9.67868 11.5374 11.9403 11.5374 14.6283Z" stroke="currentColor"/>
                  <path d="M23.5 14.6283C23.5 17.3164 21.077 19.578 17.9813 19.578C14.8855 19.578 12.4626 17.3164 12.4626 14.6283C12.4626 11.9403 14.8855 9.67868 17.9813 9.67868C21.077 9.67868 23.5 11.9403 23.5 14.6283Z" stroke="currentColor"/>
                  <path d="M8.06404 24.8171L12.0247 18.2378L15.9854 24.8171H8.06404Z" stroke="currentColor"/>
                </svg>
          </div>

          <p className="text-sm md:text-base font-semibold uppercase mb-4">
            {t.ERROR.MESSAGE}
          </p>
          <h1 className="text-gray-800 dark:text-white text-2xl md:text-3xl font-bold text-center mb-2">
            {statusCode
              ? `${statusCode} - ${t.ERROR.TITLE}`
              : `Error - ${t.ERROR.TITLE}`}
          </h1>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">
            {t.ERROR.HELP_TEXT}
          </p>

          <Link href="/">
            <a className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              {t.ERROR.BACK_TO_HOME}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page404
