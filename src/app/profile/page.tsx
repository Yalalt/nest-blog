import { FunctionComponent } from 'react';
import Author from '@/components/Author';
import { nextOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

interface PageProps {}

const Page: FunctionComponent<PageProps> = async () => {

  const session = await getServerSession(nextOptions);

  if (!session) {
    return <div>Not Authorized</div>
  }

  console.log(session, ' Session');
  const signInUserId = 1;

  return <Author authorId={signInUserId} />;
};

export default Page;
