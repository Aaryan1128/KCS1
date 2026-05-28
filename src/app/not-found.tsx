import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <div className="text-6xl font-bold text-gold-500">404</div>
      <h1 className="mt-3 text-2xl font-semibold text-navy-950 dark:text-navy-50">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-navy-600 dark:text-navy-200">
        The page you are looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-white shadow-glass hover:bg-navy-800"
      >
        Go to Home
      </Link>
    </div>
  );
}

