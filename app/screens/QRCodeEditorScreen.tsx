/**
 * @Project QRCodeEditor
 * @File QRCodeEditorScreen.tsx
 * @Path app/screens
 * @Author BRICE ZELE
 * @Date 11/04/2024
 */
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';

const QRCodeEditorScreen: React.FC = ({}): React.JSX.Element => {
  const rootViewRef = useRef<View>(null);

  return <View ref={rootViewRef} collapsable={false} style={styles.flex} />;
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
export default QRCodeEditorScreen;
