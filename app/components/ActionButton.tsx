/**
 * @Project QRCodeEditor
 * @File ActionButton.tsx
 * @Path app/components
 * @Author BRICE ZELE
 * @Date 12/04/2024
 */
import {Pressable, StyleSheet, Text, View} from 'react-native';
//import QrCodeEditIcon from '../assets/svg/qr-code-edit.svg';
//import ShareIconIcon from '../assets/svg/share.svg';
import React from 'react';

type ActionButtonProps = {
  onEdit: () => void;
  onShare: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  onEdit,
  onShare,
}): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onEdit}>
        {/*<QrCodeEditIcon />*/}
        <Text style={styles.textButton}>Edit</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onShare}>
        {/*<ShareIconIcon />*/}
        <Text style={styles.textButton}>Share</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  button: {
    flexDirection: 'row',
    columnGap: 10,
  },
  textButton: {
    color: 'white',
  },
});

export default ActionButton;
