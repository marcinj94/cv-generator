import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDesktop, FaSquarePhone } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { Box } from '..';

interface ContactDetailsProps {
  mail: string;
  linkedin?: string;
  github?: string;
  phone?: string;
  webSite?: string;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({
  mail,
  linkedin,
  github,
  phone,
  webSite,
}) => (
  <Box>
    <ul className="flex flex-col gap-3">
      <li>
        <a className="flex items-center gap-3" href={`mailto:${mail}`}>
          <FiMail size={24} />
          {mail}
        </a>
      </li>
      {linkedin && (
        <li>
          <a
            className="flex items-center gap-3"
            href={`https://www.linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={24} />
            <span className="underline">{linkedin}</span>
          </a>
        </li>
      )}
      {github && (
        <li className="flex items-center gap-3">
          <a
            className="flex items-center gap-3"
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={24} />
            <span className="underline">{github}</span>
          </a>
        </li>
      )}
      {phone && (
        <li className="flex items-center gap-3">
          <a className="flex items-center gap-3" href={`tel:${phone.replaceAll(' ', '')}`}>
            <FaSquarePhone size={24} />
            {phone}
          </a>
        </li>
      )}
      {webSite && (
        <li className="flex items-center gap-3">
          <a className="flex items-center gap-3" href={webSite} target="_blank" rel="noreferrer">
            <FaDesktop size={24} />
            <span className="underline">{webSite}</span>
          </a>
        </li>
      )}
    </ul>
  </Box>
);
