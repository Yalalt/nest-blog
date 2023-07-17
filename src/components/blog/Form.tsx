'use client';

import { FunctionComponent } from 'react';
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

interface BlogFormProps {
  id?: string;
}

const BlogForm: FunctionComponent<BlogFormProps> = ({ id }) => {

    const formSchema = z.object({
        username: z.string().min(2).max(50),
    })

  return <div>{id ? 'Edit' : 'Add'} Form</div>;
};

export default BlogForm;
