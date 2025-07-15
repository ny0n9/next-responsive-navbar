import Image from "next/image";
import Link from "next/Link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="container-fluid my-15">
      <div className="sm:max-w-md mx-auto p-4 border-2 border-blue-500 rounded-lg">
        <main className="mb-5">
          <Image
            className="text-h1 mx-auto my-5"
            src="/images/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="mx-auto my-5">
            <li className="text-center my-2">
              Get started by editing <code>app/page.tsx</code>.
            </li>
            <li className="text-center my-2">
              Save and see your changes instantly.
            </li>
          </ol>

          <div className="mx-auto my-5">
            <Link
              className="flex items-center justify-center mb-2"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="text-gray-900"
                src="/images/vercel.svg"
                alt="Vercel logomark"
                width={28}
                height={28}
              />
              &nbsp;<span className="text-h6">Deploy now</span>
            </Link>
            <Link
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-center mb-2"
            >
              <Image
                className="text-gray-900"
                src="/images/book.svg"
                alt="Vercel logomark"
                width={24}
                height={24}
              />
              &nbsp;<span className="text-h6">Read our docs</span>
            </Link>
          </div>
        </main>
        <footer className="flex items-center justify-between mx-auto mb-5">
          <Link
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              aria-hidden
              src="/images/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            &nbsp; Learn
          </Link>
          <Link
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              aria-hidden
              src="/images/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            &nbsp; Examples
          </Link>
          <Link
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              aria-hidden
              src="/images/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            &nbsp; Go to nextjs.org →
          </Link>
        </footer>
        <div className="text-center">
          <Button variant="success" className="cursor-pointer">
            Shadcn Button
          </Button>
        </div>
      </div>
    </section>
  );
}
