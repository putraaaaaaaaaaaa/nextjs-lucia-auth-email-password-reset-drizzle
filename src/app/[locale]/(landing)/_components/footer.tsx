import Link from "next/link";
import Image from "next/image";
import {useTranslations} from 'next-intl';
export const Footer = () => {
  const t = useTranslations('Footer');
  const s = useTranslations('Sub');
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-transparent pt-8 transition delay-150 duration-300 ease-in-out md:pt-24 print:hidden"
      >
        <path
          d="
            M 0,400 
            C 0,400 0,200 0,200 
            C 40.34909359970402,243.0042668639783 80.69818719940804,286.0085337279566 135,268 
            C 189.30181280059196,249.9914662720434 257.5563448020718,170.97013195215192 311,159 
            C 364.4436551979282,147.02986804784808 403.07643359230485,202.11093846343573 452,207 
            C 500.92356640769515,211.88906153656427 560.137920828709,166.58611419410528 626,169 
            C 691.862079171291,171.41388580589472 764.3718830928599,221.54460476014305 826,248 
            C 887.6281169071401,274.45539523985695 938.3745467998519,277.2354667653225 985,246 
            C 1031.625453200148,214.7645332346775 1074.1299297077323,149.51352817856701 1122,137 
            C 1169.8700702922677,124.48647182143299 1223.1057343692194,164.71042052040943 1277,184 
            C 1330.8942656307806,203.28957947959057 1385.4471328153904,201.64478973979527 1440,200 
            C 1440,200 1440,400 1440,400 
            Z"
          stroke="none"
          strokeWidth="0"
          fill="currentColor"
          fillOpacity="1"
          className="fill-secondary transition-all delay-150 duration-300 ease-in-out"
        />
      </svg>

    <footer
      className="bg-secondary print:hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 pb-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              alt="logo"
              width={64}
              height={64}
              className="h-16 w-auto"
              src="/util/logo.webp"
            />
            <p className="text-sm leading-6 text-foreground">
              {t('title')}
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.instagram.com/sptra.re/"
                className="text-murky-400 hover:text-murky-500"
              >
                <span className="sr-only">Instagram</span>
                <Image src="/util/ig.webp" width={24} height={24} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-primary">
                 {t('partner')}
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=62895360841074&text=Halo%2C+Saya+tertarik+membuat+web+top+up+game&type=phone_number&app_absent=0"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>Web Topup</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-primary">
                {t('sitemap')}
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>{s('home')}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-in"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>{s('login')}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>{s('regis')}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/invoices"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>{s('invoice')}</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-primary">
                {t('support')}
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="wa.me/62895360841074"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>Whatsapp</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/mikeneko766"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>Telegram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="instagram.com/sptra.re"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>Instagram</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-primary">
                {t('legal')}
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>{s('privacy')}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-condition"
                    className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                    style={{ outline: "currentcolor" }}
                  >
                    <span>{s('sk')}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-background/50 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-foreground">
            © Copyright 2024 CV NUEPEDIA.
          </p>
        </div>
      </div>
    </footer>
      </div>
  );
};
