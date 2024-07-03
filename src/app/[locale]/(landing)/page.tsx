import { type Metadata } from "next";
import { Banner } from "./_components/banner";
export const metadata: Metadata = {
  title: "Next.js Lucia Auth Starter Template",
  description:
    "A Next.js starter template with nextjs and Lucia auth. Includes drizzle, trpc, react-email, tailwindcss and shadcn-ui",
};

const HomePage = () => {
  return (
    <>
      <main className="relative bg-gradient-theme">
        <Banner />
        <div className="flex flex-col gap-y-8 pt-8">
        </div>
      </main>
    </>
  );
};

export default HomePage;
