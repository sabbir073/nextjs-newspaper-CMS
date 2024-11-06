import clsx from 'clsx';
import { ReactNode, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={clsx('px-4 sm:px-6 md:px-8 max-w-7xl mx-auto', className)}
      {...props}
    >
      {children}
    </div>
  );
}
