import React, { memo } from 'react';
import clsx from 'clsx';

const PostCardLoading = () => {
  return (
    <article
      className={clsx(
        'rounded-xl py-4 px-5 md:p-7 animate-pulse',
        'bg-sky-100 bg-opacity-50',
        'dark:bg-rua-gray-800 dark:bg-opacity-100',
        'flex items-center justify-between text-gray-800 ',
        'mb-4 dark:text-gray-200'
      )}
    >
      <div className="flex-1">
        <h2 className="w-full mb-4 bg-gray-300 rounded-lg md:w-96 h-9 dark:bg-gray-500"></h2>

        <div className="flex items-center text-sm">
          <div className="w-16 h-5 mr-4 bg-gray-300 rounded-md last:mr-0 dark:bg-gray-500"></div>
          <div className="w-16 h-5 bg-gray-300 rounded-md dark:bg-gray-500"></div>
        </div>
      </div>

      <div className="hidden w-24 h-6 bg-gray-300 rounded-md md:block dark:bg-gray-500"></div>
    </article>
  );
};

export default memo(PostCardLoading);
