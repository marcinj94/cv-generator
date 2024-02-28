import { IconType } from 'react-icons';
import { Box, Capsule } from '..';

interface Technology {
  description: string;
  Icon?: IconType;
}

interface TechnologiesProps {
  elements: Technology[];
}

export const Technologies: React.FC<TechnologiesProps> = ({ elements }) => (
  <Box header="Technologies">
    <div className="flex gap-2 flex-wrap">
      {elements.map(({ description, Icon }) => (
        <Capsule description={description} Icon={Icon} background="bluish-gradient" />
      ))}
    </div>
  </Box>
);
