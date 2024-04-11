/**
 * @Project QRCodeEditor
 * @File QRCodeEditorScreen.tsx
 * @Path app/screens
 * @Author BRICE ZELE
 * @Date 11/04/2024
 */
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import SafeAreaWithInsets from '../components/SafeAreaWithInsets.tsx';

const QRCodeEditorScreen: React.FC = ({}): React.JSX.Element => {
  const rootViewRef = useRef<View>(null);

  return (
    <SafeAreaWithInsets>
      <View ref={rootViewRef} collapsable={false} style={styles.flex} />
    </SafeAreaWithInsets>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
export default QRCodeEditorScreen;
