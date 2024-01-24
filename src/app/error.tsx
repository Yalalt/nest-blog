'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className='text-red-400 mb-4'>Алдаа гарлаа!</h2>
      <button
        className='border border-red-400 rounded-md p-2 text-red-400 hover:bg-red-400 hover:text-white'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Дахин ачааллах
      </button>
    </div>
  );
}
