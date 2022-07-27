import type { NoteType } from '@/lib/craft';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { lang } from '@/lib/lang';

const NotePost = ({ note }: { note: NoteType }) => {
  const { locale } = useRouter();
  const t = lang[locale as 'zh' | 'en'];
  const craftSlug = note.link.slice(23);

  if (note.title === 'NULL') {
    return (
      <div className="text-gray-400 text-xs font-light py-4">
        {t.ERROR.CRAFTDOCS_ERROR}
      </div>
    );
  }

  return (
    <Link passHref href={`/post/${note.path}`}>
      <a key={craftSlug} className="mb-5 group flex items-end hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg overflow-hidden relative p-4">
        <div className="w-full flex flex-col md:flex-row items-center gap-4 lg:gap-6">
          <h2 className="text-xl font-bold">
            <span>{note.title}</span>
          </h2>
        </div>
      </a>
    </Link>
  );
};

export default NotePost;
