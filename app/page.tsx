/* eslint-disable object-curly-newline */
// import Image from 'next/image';
import { DiSwift } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiStorybook } from 'react-icons/si';
import {
  Avatar,
  Box,
  Capsule,
  ContactDetails,
  Education,
  Experience,
  Languages,
  Name,
  Profession,
  Projects,
  Technologies,
} from './components';
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
        <Projects
          projects={[
            {
              name: 'Google app',
              url: 'google.pl',
              techs: [
                {
                  description: 'Front-end:',
                  skills: [
                    {
                      description: 'Next.JS',
                      Icon: TbBrandNextjs,
                    },
                  ],
                },
                {
                  description: 'Back-end:',
                  skills: [
                    {
                      description: 'Express.JS',
                    },
                    {
                      description: 'Typescript',
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <Languages
          languages={[
            {
              name: 'Polski',
              level: 'natywny',
            },
            {
              name: 'Angielski',
              level: 'B2',
            },
          ]}
        />
        <Experience
          jobs={[
            {
              jobTitle: 'Front-end developer',
              company: 'Amazon',
              timeline: '2010 - 2015',
              techs: [
                {
                  description: 'development new front end applications',
                  skills: [
                    {
                      description: 'HTML',
                    },
                    {
                      description: 'CSS',
                    },
                    {
                      description: 'JavaScript',
                    },
                  ],
                },
                {
                  description: 'development new backend application',
                  skills: [
                    {
                      description: 'Node.JS',
                    },
                    {
                      description: 'ExpressJS',
                    },
                    {
                      description: 'MongoDB',
                    },
                    {
                      description: 'Gitlab CI/CD',
                    },
                  ],
                },
              ],
            },
            {
              jobTitle: 'Back-end developer',
              company: 'Google',
              timeline: '04.2015 - 12.2022',
              techs: [
                {
                  description: 'create new applications',
                },
              ],
            },
          ]}
        />
        <Technologies
          elements={[
            {
              description: 'Swift',
              Icon: DiSwift,
            },
            {
              description: 'Next.JS',
              Icon: TbBrandNextjs,
            },
            {
              description: 'Storybook',
              Icon: SiStorybook,
            },
            {
              description: 'Struktura MVVM',
            },
            {
              description: 'CocoaPods',
            },
            {
              description: 'Core Data',
            },
            {
              description: 'JSON',
            },
            {
              description: 'Firestore',
            },
          ]}
        />
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
        <Box header="Education">test</Box>
      </div>
    </div>
  );
};

export default Home;
