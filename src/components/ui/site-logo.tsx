import React from 'react';
import { cn } from '../../lib/utils';

interface Props {
  className?: string;
}

const SiteLogo = ({ className }: Props) => {
  return (
    <img src="/logo.png" alt="logo" className={cn('w-10 h-8', className)} />
  );
};

export default SiteLogo;
