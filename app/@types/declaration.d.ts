/**
 * @Project QRCodeEditor
 * @File declaration.d.ts
 * @Path app/@types
 * @Author BRICE ZELE
 * @Date 11/04/2024
 */
declare module '*.svg' {
  import type React from 'react'
  import type { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
