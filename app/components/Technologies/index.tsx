import { Box, Capsule, CapsuleProps } from '..';

interface TechnologiesProps {
  technologies: CapsuleProps[];
}

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => (
  <Box header="Technologies">
    <div className="flex gap-2 flex-wrap">
      {technologies.map(({ description, Icon }) => (
        <Capsule description={description} Icon={Icon} background="bluish-gradient" />
      ))}
    </div>
  </Box>
);
