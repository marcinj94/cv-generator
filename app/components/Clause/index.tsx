import clsx from 'clsx';

interface ClauseProps {
  description: string;
}

export const Clause: React.FC<ClauseProps> = ({ description }) => (
  <p className={clsx('text-sm text-justify italic')}>{description}</p>
);
