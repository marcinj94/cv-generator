import clsx from 'clsx';
import { Box, Capsule, CapsuleProps, Dot, Header } from '..';

export interface Project {
  name: string;
  url: string;
  techs: {
    description: string;
    skills?: CapsuleProps[];
  }[];
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Box header="Projekty">
    {projects.map(({ name, url, techs }, index) => (
      <div
        key={`${name}_${url}`}
        className={clsx({
          'pt-2': index !== 0,
        })}
      >
        <div className="flex justify-between items-center relative">
          <Dot isAbsolute />
          <Header background="bluish-gradient" header={name} />
          <a
            className="text-blue-600 underline dark:text-blue-500 hover:no-underline"
            href={`https://${url}/`}
            target="_blank"
            rel="noreferrer"
          >
            https://{url}/
          </a>
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
                'pb-2': index !== projects.length - 1,
              })}
            >
              {skills?.map((skill) => (
                <Capsule
                  key={skill.description}
                  description={skill.description}
                  Icon={skill.Icon}
                  boldText={skill.boldText}
                  // background="reddish-gradient"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </Box>
);
