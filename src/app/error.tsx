'use client';

interface ErrorPageProps {
    err: Error,
    reset: () => void
}

export default function ErrorPage({ err, reset }: ErrorPageProps) {
    return <div>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
}

