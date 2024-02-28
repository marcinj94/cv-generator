import clsx from 'clsx';
import { Box, Capsule, CapsuleProps, Dot } from '..';

interface Job {
  jobTitle: string;
  company: string;
  timeline: string;
  techs: {
    description: string;
    skills?: CapsuleProps[];
  }[];
}

interface ExperienceProps {
  jobs: Job[];
}

export const Experience: React.FC<ExperienceProps> = ({ jobs }) => (
  <Box header="Doświadczenie">
    {jobs.map(({ jobTitle, company, techs, timeline }, index) => (
      <div
        className={clsx({
          'pt-2': index !== 0,
        })}
      >
        <div className="flex justify-between items-center relative">
          <Dot isAbsolute />
          <h3 className="font-bold bg-gradient-to-r from-orange-500 to-red-500  inline-block text-transparent bg-clip-text">
            {jobTitle} | {company}
          </h3>
          <Capsule description={timeline} />
        </div>
        {techs?.map(({ description, skills }, techIndex) => (
          <div>
            <p
              className={clsx('italic pb-2', {
                'pt-2': techIndex !== 0,
              })}
            >
              {description}
            </p>
            <div
              className={clsx('flex gap-2 flex-wrap', {
                'pb-2': index !== jobs.length - 1,
              })}
            >
              {skills?.map((skill) => (
                <Capsule
                  description={skill.description}
                  Icon={skill.Icon}
                  boldText={skill.boldText}
                  background="reddish-gradient"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </Box>
);
