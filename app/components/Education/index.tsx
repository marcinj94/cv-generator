import clsx from 'clsx';
import { Box, Capsule, Dot, Header } from '..';

export interface UniversityProps {
  school: string;
  years: string;
  level: string;
}

interface EducationProps {
  educations: UniversityProps[];
}

export const Education: React.FC<EducationProps> = ({ educations }) => (
  <Box header="Education">
    {educations.map(({ school, years, level }, index) => (
      <div
        className={clsx({
          'mb-2': index !== educations.length - 1,
        })}
      >
        <div className="flex justify-between items-center relative">
          <Dot isAbsolute />
          <Header header={school} />
          <Capsule description={years} boldText />
        </div>
        <p className="italic">{level}</p>
      </div>
    ))}
  </Box>
);
