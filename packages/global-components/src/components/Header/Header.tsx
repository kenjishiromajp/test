import * as React from 'react';
import { Header as WestpacHeader } from '@westpac/header';

export type HeaderProps = typeof WestpacHeader.propTypes &
  typeof WestpacHeader.defaultProps;
export function Header({ children, ...props }: any) {
  return <WestpacHeader {...props}>{children as any}</WestpacHeader>;
}
