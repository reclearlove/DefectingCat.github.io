import useMounted from 'lib/hooks/useMounted';
import { useEffect } from 'react';
import tocbot from 'tocbot';

const SlideToc = () => {
  const { mounted } = useMounted();

  useEffect(() => {
    // Waiting the right time.
    mounted &&
      tocbot.init({
        tocSelector: '.toc',
        contentSelector: '#post-content',
        headingSelector: 'h1, h2, h3',
      });

    return () => tocbot.destroy();
  }, [mounted]);

  return (
    <>
      <div className="flex justify-end">
        <div className="toc"></div>
      </div>
    </>
  );
};

export default SlideToc;
