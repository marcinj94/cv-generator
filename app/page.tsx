// import Image from 'next/image';
import { Avatar, Name, Profession } from './components';
import { Size } from './components/types';

const Home = () => {
  const arr: Size[] = ['sm', 'md', 'lg'];

  return (
    <div>
      {arr.map((size: Size) => (
        <div
          className="text"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <Avatar initials="MJ" size={size} />
          <div className="div">
            <Name name="Marcin" surname="Jusiak" size={size} />
            <Profession title="Front-end developer" size={size} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
