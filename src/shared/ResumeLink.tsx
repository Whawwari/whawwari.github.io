import { ReactNode } from 'react';
import WResume from '@/assets/img/Waleed Resume.pdf';


interface ResumeLinkProps {
  children: ReactNode;
}

function ResumeLink({ children }: ResumeLinkProps) {
  return (
<a
      className={`text-white transition duration-500 hover:text-Brick`}
      href={WResume}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default ResumeLink;
