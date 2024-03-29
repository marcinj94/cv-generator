import { Box, Capsule, CapsuleProps } from '..';

interface HobbyProps {
  hobby: CapsuleProps[];
}

export const Hobby: React.FC<HobbyProps> = ({ hobby }) => (
  <Box header="Hobby" minHeight="min-h-full">
    <div className="flex gap-2 flex-wrap">
      {hobby.map(({ description, Icon, boldText }) => (
        <Capsule
          key={description}
          description={description}
          Icon={Icon}
          boldText={boldText}
          background="bluish-gradient"
        />
      ))}
    </div>
  </Box>
);
