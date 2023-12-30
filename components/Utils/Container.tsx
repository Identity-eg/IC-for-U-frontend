import { ComponentPropsWithoutRef, ReactNode } from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
}
