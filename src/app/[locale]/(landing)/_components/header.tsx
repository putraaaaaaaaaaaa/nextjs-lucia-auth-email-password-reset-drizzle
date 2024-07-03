"use client";

import {
  Button,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LocalSwitcher from "@/components/switcher";
export const Header = () => {
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  
  return (
    <nav className="sticky top-0 z-40 w-full flex-none border-b border-border/50 bg-secondary/80 backdrop-blur print:hidden">
      <div className="container">
        <div className="flex h-[60px] items-center">
          <>
            <Button
              onClick={open}
              className="rounded-md bg-secondary p-2 text-foreground lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
            <Dialog open={isOpen} as="div" className="relative z-40 lg:hidden" onClose={close}>
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-background/25 opacity-100 backdrop-blur-sm transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
              />

              <div className="fixed inset-0 z-40 flex">
                <DialogPanel
                  transition
                  className="relative flex w-full max-w-xs translate-x-0 flex-col overflow-y-auto bg-background pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                >
                  <div className="flex flex-row-reverse items-center justify-between border-b border-dashed p-4">
                    <button
                      type="button"
                      className="text-murky-400 -m-2 inline-flex items-center justify-center rounded-md p-2"
                      onClick={close}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <div className="flex items-center">
                      <Link
                        className="relative h-10 w-24"
                        href="/"
                        style={{ outline: "currentColor" }}
                      >
                        <Image alt="Logo" fill className="object-contain" src="/util/logo.webp" />
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-2 border-y border-background p-4">
                    <div>
                      <Link
                        className="group flex items-center justify-between rounded-md px-4 py-2 font-medium text-foreground hover:bg-muted"
                        href="/id"
                        style={{ outline: "currentColor" }}
                      >
                        <span>Beranda</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="hidden h-5 w-5 group-hover:block"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="group flex items-center justify-between rounded-md px-4 py-2 font-medium text-foreground hover:bg-muted"
                        href="/id/invoices"
                        style={{ outline: "currentColor" }}
                      >
                        <span>Cek Transaksi</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="hidden h-5 w-5 group-hover:block"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="group flex items-center justify-between rounded-md px-4 py-2 font-medium text-foreground hover:bg-muted"
                        href="/id/leaderboard"
                        style={{ outline: "currentColor" }}
                      >
                        <span>Leaderboard</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="hidden h-5 w-5 group-hover:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2 p-4">
                    <div>
                      <Link
                        className="group flex items-center justify-between rounded-md px-4 py-2 font-medium text-foreground hover:bg-muted"
                        href="/login"
                        style={{ outline: "currentColor" }}
                      >
                        <span>Masuk</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="hidden h-5 w-5 group-hover:block"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="group flex items-center justify-between rounded-md px-4 py-2 font-medium text-foreground hover:bg-muted"
                        href="/signup"
                        style={{ outline: "currentColor" }}
                      >
                        <span>Daftar</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="hidden h-5 w-5 group-hover:block"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </>
          <div className="ml-3 mr-2 flex items-center lg:ml-0">
            <Link href="/">
              <Image
                alt="Logo"
                width={150}
                height={43}
                className="h-8 w-auto"
                src="/util/logo.webp"
              />
            </Link>
          </div>
          <div className="hidden lg:ml-10 lg:block lg:self-stretch">
            <div className="flex h-full space-x-6">
              <Link
                className="border-primary-500 text-primary-500 relative z-10 -mb-px flex items-center space-x-2 border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                href="/"
                style={{ outline: "currentcolor" }}
              >
                <span>Beranda</span>
              </Link>
            </div>
          </div>
          <div className="ml-auto flex h-full items-center space-x-2 lg:space-x-6">
            <div className="flex flex-row-reverse items-center gap-x-2">
              <div className="relative inline-block text-left">
                <LocalSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
