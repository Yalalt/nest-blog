import Post from '@/components/post/Post';
import { getPosts } from '@/lib/prisma/posts';
/**
 * Imports the Post type from the @prisma/client module.
 * This provides access to the Post type generated from the Prisma schema.
 */
import { Post as TPost } from '@prisma/client';
// @prisma/client return Post of data type

export default async function Page() {
  const { posts = [], error }: { posts?: TPost[]; error?: any } = await getPosts({ where: { published: true } });

  if (error) {
    throw error;
  }

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h2 className='text-3xl font-extrabold leading-9 tracking-tight text-emerald-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Технологийн мэдээлэл
        </h2>
        <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
          Сүүлийн үеийн блог бичлэгүүдийг эндээс хараарай.
        </p>
      </div>
      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        {!posts.length && <div className='pt-4'>Пост олдсонгүй.</div>}
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
