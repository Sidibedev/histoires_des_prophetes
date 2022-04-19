import React, { useMemo } from 'react';
import { Box } from 'native-base';
const normal = {
  fontFamily: 'heading',
  fontWeight: 'semibold',
  fontSize: 'h5',
  color: 'primary.200',
};

const heading = {
  fontFamily: 'heading',
  fontWeight: 'medium',
  fontSize: 'h5',
  color: 'primary.100',
};

export enum TextType {
  'normal',
  'heading',
}
export default function TextBox({
  type,
  children,
}: {
  type?: TextType;
  children: string;
}) {
  const style = useMemo(() => {
    return type === TextType.heading ? heading : normal;
  }, [type]);

  return <Box _text={style}>{children}</Box>;
}
