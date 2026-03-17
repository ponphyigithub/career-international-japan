import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-primary-500 text-6xl font-bold">404</h1>
      <p className="text-text-secondary mt-4 text-lg">Page not found</p>
      <Link
        href="/"
        className="bg-primary-500 hover:bg-primary-600 mt-8 inline-flex items-center rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-colors"
      >
        Home
      </Link>
    </div>
  );
}
