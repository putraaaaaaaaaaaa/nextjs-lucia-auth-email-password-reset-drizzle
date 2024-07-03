'use client';

import { Menu } from '@headlessui/react';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FlagImage } from 'react-international-phone';

const languages = [
  
  { code: 'id', name: 'Indonesia', flag: 'id' },
  { code: 'en', name: 'English', flag: 'usa' }
];

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <Menu>
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-border/50 bg-transparent py-2 pl-4 pr-3 text-sm font-semibold uppercase text-foreground duration-300 ease-in-out hover:bg-muted/50">
          {localActive.toUpperCase()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-muted rounded-md bg-background shadow-lg ring-1 ring-muted ring-opacity-5 focus:outline-none transition ease-in duration-75 transform opacity-100 scale-100">
        {languages.map(language => (
          <Menu.Item key={language.code}>
            {({ active }) => (
              <button
                onClick={() => onSelectChange(language.code)}
                className="text-foreground group flex w-full items-center px-4 py-2 text-sm"
                disabled={isPending}
              >
                <FlagImage iso2={language.flag} size="20px" />
                <span className="ml-4">{language.name}</span>
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
