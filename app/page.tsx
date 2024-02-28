// import Image from 'next/image';
import { Avatar, Box, Capsule, ContactDetails, Education, Name, Profession } from './components';
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
        <Education
          educations={[
            {
              school: 'Josip Juraj Strossmayer University of Osijek',
              years: '10/2017 - 02/2018',
              level: 'Master of Engineering | Erasmus+',
            },
            {
              school: 'Lublin University of Technologi',
              years: '2017 - 2018',
              level: 'Master of Engineering in Computer Science | spec. Internet Application',
            },
            {
              school: 'Suleyman Demirel University',
              years: '02/2016 - 06/2016',
              level: 'Bachelor of Engineering | Erasmus+',
            },
            {
              school: 'Lublin University of Technologi',
              years: '2013 - 2017',
              level: 'Bachelor of Engineering in Computer Science',
            },
          ]}
        />
        <Capsule description="2017 - 2022" boldText />
        <Capsule description="2017 - 2022" boldText background="bluish-gradient" />
        <Capsule description="2017 - 2022" background="reddish-gradient" />
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
