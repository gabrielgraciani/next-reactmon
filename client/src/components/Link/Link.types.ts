import { ReactElement } from 'react';
import { LinkProps as NextLinkProps } from 'next/link';

export interface ILinkProps extends NextLinkProps {
  children: ReactElement;
  activeClassName: string;
}
