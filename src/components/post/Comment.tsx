'use client';

import { FunctionComponent } from 'react';
import Giscus from '@giscus/react';

interface CommentProps {}

const Comment: FunctionComponent<CommentProps> = () => {
  return (
    <Giscus
      id='comments'
      repo='Yalalt/medium-like'
      repoId='R_kgDOJ23-qA'
      category='Announcements'
      categoryId='DIC_kwDOJ23-qM4CZOCN'
      mapping='pathname'
      term='Welcome to @giscus/react component!'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='light'
      lang='en'
      loading='lazy'
    />
  );
};

export default Comment;
