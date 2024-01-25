import { ReactNode } from 'react';
import WResume from '@/assets/img/Waleed Resume-NgNSyWO0.pdf';

interface ResumeLinkProps {
  children: ReactNode;
}

function ResumeLink({ children }: ResumeLinkProps) {
  return (
    <a href={WResume} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default ResumeLink;
