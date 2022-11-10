import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllNotes } from '@/lib/craft'
import BLOG from '@/blog.config'

const headStr = `
  <style>
    .navigation {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99;
    }
    .navigation__checkbox {
      display: none;
    }

    .navigation__button {
      position: absolute;
      top: 0.3rem;
      right: 1.0rem;
      padding-top: 0.4rem;
      height: 2rem;
      width: 2rem;
      text-align: center;
      border-radius: 50%;
      z-index: 98;
      cursor: pointer;
      color: gray;
    }
    .navigation__logo:hover {
      color: blue;
    }
    .navigation__title {
      position: fixed;
      top: 0.5rem;
      right: 3rem;
      visibility: hidden;
      margin: 0.2rem 1rem;
      color: gray;
      font-size: 1rem;
      z-index: 98;
      transition: all 200ms ease-out;
    }

    .navigation__background {
      position: fixed;
      top: 0.65rem;
      right: 1.25rem;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      z-index: 97;
      transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1);
    }
    .navigation__nav {
      position: fixed;
      top: 0;
      right: 0;
      opacity: 0;
      width: 100%;
      visibility: hidden;
      z-index: 97;
      transition: all 400ms ease-in;
    }

    .navigation__list {
      position: absolute;
      top: 4rem;
      right: 1rem;
      list-style: none;
    }
    .navigation__item {
      margin: 0.5rem;
      text-align: right;
    }

    .navigation__link:link,
    .navigation__link:visited {
      display: inline-block;
      padding: 0.5rem 1rem;
      color: #494b4e;
      font-size: 1.2rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    .navigation__link:hover {
      color: #494b4e;
      transform: scale(1.2);
    }

    .navigation__icon {
      position: fixed;
      top: 15rem;
      right: 0;
      visibility: hidden;
      margin: 0.8rem 2rem;
      z-index: 98;
      transition: all 200ms ease-out;
    }
    .navigation__icon a {
      top: 0;
      right: 0;
      display: inline-block;
      width: 1rem;
      margin: 0.5rem;
      z-index: 98;
    }
    .navigation__icon a:hover {
      opacity: 0.7;
    }

    .navigation__checkbox:checked ~ .navigation__background {
      background: #F6F8FA;
      transform: rotate(45deg) translateX(12px) translateY(12px);
      box-shadow: 0 0 20px rgb(0 0 0 / 20%);
      height: 500px;
      width: 500px;
      right: -160px;
      top: -160px;
      border-radius: 50%;
    }
    .navigation__checkbox:checked ~ .navigation__title {
      visibility: visible;
      opacity: 1;
    }
    .navigation__checkbox:checked ~ .navigation__icon {
      visibility: visible;
      opacity: 1;
    }
    .navigation__checkbox:checked ~ .navigation__nav {
      width: 100%;
      visibility: visible;
      opacity: 1;
    }

    .footer {
      position: absolute;
      top: 18rem;
      right: 2rem;
      color: #b7c0c3;
      font-size: 0.8rem;
    }
  </style>
`

/* You can adjust to use images, rather than svg.
<a aria-label="toggle navigation menu" class="navigation__logo">
  <img alt="logo" class="logo" src="/favicon.svg" />
</a>
*/
const bodyStr = `
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="nav-toggle" />
    <label for="nav-toggle" class="navigation__button">
      <a aria-label="toggle navigation menu" class="navigation__logo">
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5113 5.44965C17.5113 8.13769 15.0884 10.3993 11.9926 10.3993C8.89686 10.3993 6.47394 8.13769 6.47394 5.44965C6.47394 2.7616 8.89686 0.5 11.9926 0.5C15.0884 0.5 17.5113 2.7616 17.5113 5.44965Z" stroke="currentColor" />
      <path d="M11.5374 14.6283C11.5374 17.3164 9.11446 19.578 6.01869 19.578C2.92292 19.578 0.5 17.3164 0.5 14.6283C0.5 11.9403 2.92292 9.67868 6.01869 9.67868C9.11446 9.67868 11.5374 11.9403 11.5374 14.6283Z" stroke="currentColor"/>
      <path d="M23.5 14.6283C23.5 17.3164 21.077 19.578 17.9813 19.578C14.8855 19.578 12.4626 17.3164 12.4626 14.6283C12.4626 11.9403 14.8855 9.67868 17.9813 9.67868C21.077 9.67868 23.5 11.9403 23.5 14.6283Z" stroke="currentColor"/>
      <path d="M8.06404 24.8171L12.0247 18.2378L15.9854 24.8171H8.06404Z" stroke="currentColor"/>
    </svg>
      </a>
    </label>
    <div class="navigation__background"></div>

    <p class="navigation__title">Name6</p>

    <nav class="navigation__nav" role="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="${BLOG.notesLink.index}" class="navigation__link">${BLOG.notesNav.index}</a>
        </li>
        <li class="navigation__item">
          <a href="${BLOG.notesLink.blog}" class="navigation__link">${BLOG.notesNav.blog}</a>
        </li>
        <li class="navigation__item">
          <a href="${BLOG.notesLink.contact}" target="_blank" class="navigation__link">${BLOG.notesNav.contact}</a>
        </li>
      </ul>
      <p class="footer">© CC BY-NC-SA 4.0</p>
    </nav>

    <div class="navigation__icon">
      <a target="_blank" href=${BLOG.socialLink.github}>
        <img alt="Github" src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViPC90aXRsZT48cGF0aCBmaWxsPSJncmF5IiBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+" />
      </a>
    </div>

  </div>
`

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { pathname } = req.query
  // console.log('pathname: ', pathname);
  // console.log('slug: ', slug);

  const noteItem = await getNoteItem(pathname as string)
  // console.log('htmlrewrite noteItem: ', noteItem);
  if (noteItem === undefined) {
    res.statusCode = 404
    res.end(
      'Notes Not Found, Make sure you have the correct pathname and check your Craft.do setting page.',
    )
    return
  }
  const craftUrl = noteItem.link

  // console.log('htmlrewrite craftUrl: ', craftUrl)
  const response = await fetch(craftUrl)
  const originResText = await response.text()
  const modifyResText = originResText
    .replace('<meta name="robots" content="noindex">', '')
    .replace(
      '<link rel="icon" href="/share/static/favicon.ico">',
      '<link rel="icon" href="/favicon.svg">',
    )
    .replace(
      '<link rel="apple-touch-icon" href="/share/static/logo-192.png">',
      '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
    )
    .replace(
      '<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,300i,400,400i,500,500i,700,700i&amp;display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">',
      '',
    )
    .replace(
      '<meta name="luki:api-endpoint" content="https://www.craft.do/api">',
      '<meta name="luki:api-endpoint" content="/api">',
    )
    .replace(
      '<script async src="https://www.craft.do/assets/js/analytics2.js"></script>',
      '',
    )
    .replace('</head><body', `${headStr}</head><body`)
    .replace('</body></html>', `${bodyStr}</body></html>`)

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.send(modifyResText)
}

async function getNoteItem(path: string) {
  const notesObj = await getAllNotes()
  for (let i = 0; i < notesObj.length; i++) {
    const noteItem = notesObj[i]
    // console.log('getNoteItem path: ', path);
    // console.log('getNoteItem noteItem: ', noteItem);
    if (path === noteItem.path)
      return noteItem
  }
}

