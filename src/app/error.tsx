"use client";

import H1 from "@/components/h1";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="text-center py-24">
      <H1 className="mb-5">Something went wrong!</H1>
      <p>{error.message}</p>

      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
