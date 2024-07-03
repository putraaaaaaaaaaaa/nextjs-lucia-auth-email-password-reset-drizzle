import "@/styles/globals.css";
import "@/styles/sec.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { APP_TITLE } from "@/lib/constants";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata, Viewport } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export const metadata: Metadata = {
  title: {
    default: APP_TITLE,
    template: `%s | ${APP_TITLE}`,
  },
  description: "Acme - Simple auth with lucia and trpc",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export const viewport: Viewport = {
  width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
    params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "bg-background bg-gradient-theme text-foreground font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
          </TRPCReactProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
