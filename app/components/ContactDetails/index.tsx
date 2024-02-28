import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaSquarePhone } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

interface ContactDetailsProps {
  mail: string;
  linkedin?: string;
  github?: string;
  phone?: string;
}

// TODO: border przeniesc do nowego komponentu -> tak aby było to reuzywalne!
// TODO: mail, linkedin, github jako linki!

export const ContactDetails: React.FC<ContactDetailsProps> = ({
  mail,
  linkedin,
  github,
  phone,
}) => {
  // eslint-disable-next-line no-console
  console.log('mail:', mail);
  // eslint-disable-next-line no-console
  console.log('linkedin:', linkedin);
  // eslint-disable-next-line no-console
  console.log('github:', github);
  // eslint-disable-next-line no-console
  console.log('phone:', phone);
  return (
    <div className="px-10 py-4 rounded-[50px] border border-spacing-1 border-gray-700 dark:border-white">
      <ul className="flex flex-col gap-3">
        <li className="flex items-center gap-3">
          <FiMail size={24} />
          {mail}
        </li>
        {linkedin && (
          <li className="flex items-center gap-3">
            <AiFillLinkedin size={24} />
            <span className="underline">{linkedin}</span>
          </li>
        )}
        {github && (
          <li className="flex items-center gap-3">
            <AiFillGithub size={24} />
            <span className="underline">{github}</span>
          </li>
        )}
        {phone && (
          <li className="flex items-center gap-3">
            <FaSquarePhone size={24} />
            {phone}
          </li>
        )}
      </ul>
    </div>
  );
};
