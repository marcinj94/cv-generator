import Link from 'next/link';
import DarkLightButton from '../DarkLightButton';

// TODO: dodać .stories

export const Navbar = () => (
  <nav className="flex gap-1 fixed right-2 top-2">
    <div className="flex flex-col">
      <Link href="/">Home</Link>
      <Link href="/cv">CV page</Link>
      <Link href="/form">Form</Link>
    </div>
    <DarkLightButton />
  </nav>
);
