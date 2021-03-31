import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import { cloneElement, ReactElement } from 'react';

import { LinkProps } from './Link.types';

export const Link = ({
  children,
  activeClassName,
  ...rest
}: LinkProps): ReactElement => {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';
  return (
    <NextLink {...rest}>
      {cloneElement(children, {
        className,
      })}
    </NextLink>
  );
};
