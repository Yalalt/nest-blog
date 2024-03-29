import BlogForm from '@/components/post/Form';
import { getPostById } from '@/lib/prisma/posts';
import { FunctionComponent } from 'react';

interface EditProps {
  params: {
    id: string;
  };
}

const Edit: FunctionComponent<EditProps> = async ({ params: { id } }) => {
  const { post } = await getPostById(id);

  return <BlogForm post={post} />;
};

export default Edit;
