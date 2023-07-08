import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Олдсонгүй!</h2>
      <p>Could not found requested resource</p>
      <p>
        View <Link href='/blog'>all post</Link>
      </p>
    </div>
  );
}
