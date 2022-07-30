import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <>
      <button
        // title={`Toggle theme - current ${theme}`}
        onClick={() =>
          setTheme(
            theme === 'light'
              ? systemTheme === 'dark'
                ? 'system'
                : 'dark'
              : theme === 'system'
                ? resolvedTheme === 'light' ? 'dark' : 'light'
                : systemTheme === 'light' ? 'system' : 'light',
          )
        }
        className="ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer rounded-lg dark:text-gray-50"
      >
        {
          hasMounted && theme === 'system'
            ? resolvedTheme === 'light'
              ? <SunIcon className="h-5 w-5" />
              : <MoonIcon className="h-5 w-5" />
            : theme === 'light'
              ? <SunIcon className="h-5 w-5" />
              : <MoonIcon className="h-5 w-5" />
        }
      </button>
    </>
  );
};

export default ThemeSwitcher;
