import { nextOptions } from '@/lib/auth';
import { createPost } from '@/lib/prisma/posts';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  /**
   * Gets the user's session using NextAuth's getServerSession method.
   *
   * nextOptions contains the NextAuth options needed for getServerSession.
   *
   * Returns the user's session object containing user details like id, name etc.
   */
  const session = await getServerSession(nextOptions);

  const post = await request.json();

  const createdPost = await createPost({
    ...post,
    userId: session?.user.id,
  });

  return NextResponse.json(createdPost);
}
