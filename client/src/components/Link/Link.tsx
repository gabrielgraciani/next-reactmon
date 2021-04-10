import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import { cloneElement, ReactElement } from 'react';

import { ILinkProps } from './Link.types';

const Link = ({
  children,
  activeClassName,
  ...rest
}: ILinkProps): ReactElement => {
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

export default Link;
