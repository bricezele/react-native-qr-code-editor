/**
 * @Project QRCodeEditor
 * @File QRCodeEditorScreen.tsx
 * @Path app/screens
 * @Author BRICE ZELE
 * @Date 11/04/2024
 */
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import ActionButton from '../components/ActionButton.tsx';

const QRCodeEditorScreen: React.FC = ({}): React.JSX.Element => {
  const rootViewRef = useRef<View>(null);

  return (
    <View ref={rootViewRef} collapsable={false} style={styles.container}>
      <View style={styles.buttonContainer}>
        <ActionButton onEdit={() => {}} onShare={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69f',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    height: 50,
  },
});
export default QRCodeEditorScreen;
