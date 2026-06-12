import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/en"
        className="inline-flex items-center gap-2 bg-gold text-black hover:bg-gold-light px-6 py-3 font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
