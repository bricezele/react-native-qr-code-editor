/**
 * @Project QRCodeEditor
 * @File SafeAreaWithInsets.ts
 * @Path app/components
 * @Author BRICE ZELE
 * @Date 11/04/2024
 */
import React, {PropsWithChildren, useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

const SafeAreaWithInsets: React.FC<PropsWithChildren> = ({
  children,
}): React.JSX.Element => {
  const insets = useSafeAreaInsets();

  const safeAreaStyles = useMemo(
    () => ({
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }),
    [insets],
  );

  return <View style={safeAreaStyles}>{children}</View>;
};

export default SafeAreaWithInsets;
