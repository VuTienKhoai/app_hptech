import * as React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(name: string | any, param: any) {
  navigationRef.current?.navigate(name, param);
}
