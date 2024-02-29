import { GiAmericanFootballHelmet, GiPoland } from 'react-icons/gi';
import { IconType } from 'react-icons';
import { Box } from '..';

// TODO: dodanie większej ilosci ikon i lepsze nimi zarzadzanie

interface Language {
  name: 'Angielski' | 'Polski' | string;
  level: string;
}

interface LanguagesProps {
  languages: Language[];
}

export const Languages: React.FC<LanguagesProps> = ({ languages }) => (
  <Box header="Języki">
    <ul className="flex flex-col gap-2 flex-wrap">
      {languages.map((lang) => {
        let Icon: IconType | null = null;
        if (lang.name === 'Polski') {
          Icon = GiPoland;
        } else if (lang.name === 'Angielski') {
          Icon = GiAmericanFootballHelmet;
        }

        return (
          <li className="flex justify-start items-center  gap-2">
            {Icon && <Icon size={24} />}
            {lang.name} |{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500  inline-block text-transparent bg-clip-text font-bold italic">
              {lang.level}
            </span>
          </li>
        );
      })}
    </ul>
  </Box>
);
