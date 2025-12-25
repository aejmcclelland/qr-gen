import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card bg-base-100 shadow-xl p-10 flex flex-col items-center gap-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center">QR‑Gen</h1>
        <p className="text-base-content/70 text-center">
          Generate QR codes instantly or manage your saved ones.
        </p>

        <div className="flex flex-col gap-3 w-full">
          <Link href="/qr/new" className="btn btn-primary w-full">
            Generate a QR Code
          </Link>

          <Link href="/qr" className="btn btn-secondary w-full">
            View Saved QR Codes
          </Link>
        </div>
      </div>
    </main>
  );
}
