// import Image from 'next/image';
import { Avatar, Name } from './components';

const Home = () => (
  // const test = 2;
  // const test2 = 123;

  // <div className="flex items-center justify-center content-center flex-col gap-5">
  <div className="">
    <div
      className="text"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Avatar initials="MJ" size="sm" />
      <Name name="Marcin" surname="Jusiak" size="sm" />
    </div>

    <div
      className="text"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Avatar initials="MJ" size="md" />
      <Name name="Marcin" surname="Jusiak" size="md" />
    </div>

    <div
      className="text"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Avatar initials="MJ" size="lg" />
      <Name name="Marcin" surname="Jusiak" size="lg" />
    </div>
  </div>
);

export default Home;
