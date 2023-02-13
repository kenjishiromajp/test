import * as React from 'react';
import { GEL as WestpacGEL } from '@westpac/core';

export type GELProps = typeof WestpacGEL.propTypes &
  typeof WestpacGEL.defaultProps;
export function GEL({ children, ...props }: GELProps) {
  return <WestpacGEL {...props}>{children}</WestpacGEL>;
}
