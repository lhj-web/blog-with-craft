import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ColorSwatchIcon, MenuIcon } from '@heroicons/react/outline';
import BLOG from '@/blog.config';
import Social from './Social';
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';

const NavBar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  let activeMenu = '';
  if (router.query.slug)
    activeMenu = `/${router.query.slug}`;

  else
    activeMenu = router.pathname;

  const links = [
    {
      id: 0,
      to: '/',
      name: 'theme',
      icon: <ColorSwatchIcon className="inline-block mb-1 h-5 w-5" />,
      show: false,
    },
  ];
  return (
    <div className="flex">
      <ul className="hidden md:flex md:gap-1">
        {links.map(
          link =>
            link.show && (
              <Link passHref key={link.id} href={link.to}>
                <li
                  className={`${
                    activeMenu === link.to ? 'bg-gray-200 dark:bg-gray-700' : ''
                  } hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav`}
                >
                  <a className="font-light">
                    {link.icon}
                    <span className="inline-block m-1">{link.name}</span>
                  </a>
                </li>
              </Link>
            ),
        )}
      </ul>

      <LangSwitcher />
      <ThemeSwitcher />

      <div className="md:hidden mr-2 block ">
        <button
          type="button"
          onClick={() => setShowMenu(showMenu => !showMenu)}
          className="hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3"
        >
          <MenuIcon className="inline-block mb-1 h-5 w-5" />
        </button>
        {showMenu && (
          <div className="absolute right-0 w-40 mr-4 mt-2 origin-top-right bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 rounded-md shadow-lg outline-none">
            <div className="py-1">
              {links.map(
                link =>
                  link.show && (
                    <Link passHref key={link.id} href={link.to}>
                      <a className="hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5">
                        {link.icon}
                        <span className="m-1">{link.name}</span>
                      </a>
                    </Link>
                  ),
              )}
            </div>
            <div className="px-4 py-4">
              <Social />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = ({ navBarTitle }: { navBarTitle: string | null }) => {
  const [showTitle, setShowTitle] = useState(false);
  const useSticky = !BLOG.autoCollapsedNavBar;
  const navRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null!);
  const handler = ([entry]: IntersectionObserverEntry[]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined)
        navRef.current?.classList.add('sticky-nav-full');

      else
        navRef.current?.classList.remove('sticky-nav-full');
    }
    else {
      navRef.current?.classList.add('remove-sticky');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100)
        setShowTitle(true);
      else
        setShowTitle(false);
    });

    const observer = new IntersectionObserver(handler);
    observer.observe(sentinelRef.current);
  }, [sentinelRef]);
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinelRef}></div>
      <div
        className="sticky-nav m-auto h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 max-w-2xl px-4"
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link passHref href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6 hover:text-blue-500 dark:hover:text-blue fill-current hover:rotate-45">
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5113 5.44965C17.5113 8.13769 15.0884 10.3993 11.9926 10.3993C8.89686 10.3993 6.47394 8.13769 6.47394 5.44965C6.47394 2.7616 8.89686 0.5 11.9926 0.5C15.0884 0.5 17.5113 2.7616 17.5113 5.44965Z" stroke="currentColor" />
                  <path d="M11.5374 14.6283C11.5374 17.3164 9.11446 19.578 6.01869 19.578C2.92292 19.578 0.5 17.3164 0.5 14.6283C0.5 11.9403 2.92292 9.67868 6.01869 9.67868C9.11446 9.67868 11.5374 11.9403 11.5374 14.6283Z" stroke="currentColor"/>
                  <path d="M23.5 14.6283C23.5 17.3164 21.077 19.578 17.9813 19.578C14.8855 19.578 12.4626 17.3164 12.4626 14.6283C12.4626 11.9403 14.8855 9.67868 17.9813 9.67868C21.077 9.67868 23.5 11.9403 23.5 14.6283Z" stroke="currentColor"/>
                  <path d="M8.06404 24.8171L12.0247 18.2378L15.9854 24.8171H8.06404Z" stroke="currentColor"/>
                </svg>
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {navBarTitle}
            </p>
              )
            : (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
