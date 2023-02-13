import * as React from 'react';
import { GEL as WestpacGEL } from '@westpac/core';

export type HeaderProps = typeof WestpacGEL.propTypes &
  typeof WestpacGEL.defaultProps;
export function Header({ children, ...props }: HeaderProps) {
  return <WestpacGEL {...props}>{children}</WestpacGEL>;
}
