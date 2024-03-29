import clsx from 'clsx';
import { Box, Capsule, CapsuleProps, Dot, Header } from '..';

export interface Job {
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
  <Box header="Doświadczenie" minHeight="min-h-[95%]">
    {jobs.map(({ jobTitle, company, techs, timeline }, index) => (
      <div
        key={`${jobTitle}_${company}_${timeline}`}
        className={clsx({
          'pt-2': index !== 0,
        })}
      >
        <div className="flex justify-between items-center relative">
          <Dot isAbsolute background="reddish-gradient" />
          <Header
            header={`${jobTitle} | ${company}`}
            background={index % 2 === 0 ? 'bluish-gradient' : 'reddish-gradient'}
          />
          <Capsule description={timeline} />
        </div>
        {techs?.map(({ description, skills }, techIndex) => (
          <div key={description}>
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
                  key={skill.description}
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
