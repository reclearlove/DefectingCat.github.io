import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import clsx from 'clsx';

const GistsCode = dynamic(
  () => import('components/gists/gists-code-skeleton'),
  {
    suspense: true,
  }
);

dayjs.extend(relativeTime);

const GistSkeleton = () => {
  return (
    <>
      <main className="max-w-5xl px-4 mx-auto lg:px-0">
        <div className="pb-4 text-sm">
          <div className="flex items-center py-1 ">
            <div
              className={clsx(
                'w-8 h-8 rounded-full',
                'animate-pulse bg-gray-300'
              )}
            ></div>
            <h1
              className={clsx(
                'ml-2 overflow-hidden text-xl',
                'whitespace-nowrap overflow-ellipsis',
                'w-[234px] animate-pulse bg-gray-300',
                'h-6 rounded-lg'
              )}
            ></h1>
          </div>

          <p
            className={clsx(
              'ml-10 text-gray-400',
              'w-48 h-4 animate-pulse bg-gray-300',
              'rounded-lg'
            )}
          ></p>

          <div className="py-4">
            <p className="pb-2 text-lg text-gray-500">
              <span className={'w-16 animate-pulse'}></span>
            </p>

            <Suspense fallback>
              <GistsCode />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
};

export default GistSkeleton;
