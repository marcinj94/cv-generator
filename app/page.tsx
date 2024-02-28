// import Image from 'next/image';
import { Avatar, Box, ContactDetails, Name, Profession } from './components';
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
      <div className="flex flex-col gap-3 m-4">
        <ContactDetails
          mail="john.doe@gmail.com"
          linkedin="Marcin Jusiak"
          github="marcinj94"
          phone="+48 123 123 123"
        />
        <ContactDetails mail="john.doe@gmail.com" />
        <ContactDetails mail="john.doe@gmail.com" linkedin="Marcin Jusiak" />
        <ContactDetails mail="john.doe@gmail.com" linkedin="Marcin Jusiak" github="marcinj94" />
        <Box header="Education">test</Box>
      </div>
    </div>
  );
};

export default Home;
