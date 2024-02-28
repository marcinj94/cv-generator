import clsx from 'clsx';
import { Box, Capsule, Dot } from '..';

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
          <h3 className="font-bold">{school}</h3>
          <Capsule description={years} boldText />
        </div>
        <p className="italic">{level}</p>
      </div>
    ))}
  </Box>
);
