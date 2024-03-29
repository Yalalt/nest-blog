import Link from 'next/link';

type Props = {
  totalPages: number;
  currentPage: number;
};

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
      <nav className='flex justify-between'>
        {!prevPage && (
          <button rel='previous' className='cursor-auto disabled:opacity-50' disabled={!prevPage}>
            Өмнөх
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/posts/` : `/posts?page=${currentPage - 1}`}>
            <button rel='previous'>Өмнөх</button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button rel='next' className='cursor-auto disabled:opacity-50' disabled={!nextPage}>
            Дараах
          </button>
        )}
        {nextPage && (
          <Link href={`/posts?page=${currentPage + 1}`}>
            <button rel='next'>Дараах</button>
          </Link>
        )}
      </nav>
    </div>
  );
}
