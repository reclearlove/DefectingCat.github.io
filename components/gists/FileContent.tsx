import Anchor from 'components/mdx/Anchor';
import Loading from 'components/RUA/loading/RUALoading';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Gist } from 'types';

const GistsCode = dynamic(() => import('components/gists/GistsCode'), {
  loading: () => <Loading classNames="h-[300px]" />,
});

type Props = {
  gists: Gist[];
};

const FileContent = ({ gists }: Props) => {
  return (
    <>
      <div className="flex-1 py-4 overflow-hidden md:pl-8">
        {gists.map((g) => (
          <div key={g.id}>
            {Object.keys(g.files).map((f) => (
              <div key={g.files[f].raw_url} className="pb-4 ">
                {/* Username and file name */}
                <h1 className="md:text-lg">
                  {g.owner.login} /
                  <Link href={`/g/${g.id}`} passHref>
                    <Anchor external={false}>{g.files[f].filename}</Anchor>
                  </Link>
                </h1>
                {/* Time */}
                <p className="text-gray-400">
                  Last active: {dayjs(g.updated_at).fromNow()}
                </p>
                {/* Description */}
                <p className="text-gray-500">{g.description}</p>

                <GistsCode file={g.files[f]} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default FileContent;