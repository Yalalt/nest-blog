import Author from '@/components/Author';
import { FunctionComponent } from 'react';


interface PageProps {}

const Page: FunctionComponent<PageProps> = async () => {
  const signInUserId = 1;
  
  return <Author authorId={signInUserId} />;
};

export default Page;
