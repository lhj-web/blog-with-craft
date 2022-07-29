import type { NoteType } from '@/lib/craft';

import BLOG from '@/blog.config';
import Container from '@/components/Container';
import NotePost3 from '@/components/NotePost';
import { getAllNotes } from '@/lib/craft';
import Hero from '@/components/Hero';

export async function getStaticProps() {
  const notes = await getAllNotes();
  return {
    props: {
      notes,
    },
    revalidate: 10,
  };
}

const Notes = ({ notes }: { notes: NoteType[] }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Hero />
      {notes.map(note => (
        <NotePost3 key={note.link} note={note} />
      ))}
    </Container>
  );
};

export default Notes;
