'use client';

import { Menu } from '@headlessui/react';
import { Fragment, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { FlagImage } from 'react-international-phone';

const flags = {
  en: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
      <path fill="#F5F5F5" d="M5 4H43C45.2091 4 47 5.79086 47 8V40C47 42.2091 45.2091 44 43 44H5C2.79086 44 1 42.2091 1 40V8C1 5.79086 2.79086 4 5 4Z"/>
      <path fill="#41479B" d="M19.542 4.115v19.771H47v-4.603H24.146V4.115zM1 24.115V28.72h22.854v15.165H1V24.115zm17.771 4.604V43.885H5.229V28.72h13.542zM29.771 28.72H47v15.165H29.771V28.72z"/>
      <path fill="#FF4B55" d="M24 27.345L11.885 44H5.229L18.344 27.345H24zm3.885-3.23L47 27.345v-4.603L27.885 17.115H24v7zM1 24.115h4.604V44H1V24.115zm17.771 4.604h-4.604v19.771h4.604V28.72zm23.542 4.604V44H24v-4.604h18.313V33.323z"/>
    </svg>
  ),
  id: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
      <path fill="#D80027" d="M24 24H0V0h48v24z"/>
      <path fill="#F0F0F0" d="M24 24H0v24h48V24z"/>
    </svg>
  )
};

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
