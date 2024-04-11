/**
 * @Project QRCodeEditor
 * @File ConditionalWrap.tsx
 * @Path app/components
 * @Author BRICE ZELE
 * @Date 12/04/2024
 */
import type React from 'react';

type ConditionalWrapProps = {
  condition: boolean;
  wrap: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
};

export const ConditionalWrap: React.FC<ConditionalWrapProps> = ({
  condition,
  children,
  wrap,
}): JSX.Element => (condition ? wrap(children) : children);

export default ConditionalWrap;
