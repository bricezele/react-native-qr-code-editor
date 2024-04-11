/**
 * @Project QRCodeEditor
 * @File ActionButton.tsx
 * @Path app/components
 * @Author BRICE ZELE
 * @Date 12/04/2024
 */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import QrCodeEdit from '../assets/svg/qr-code-edit.svg';
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
        <QrCodeEdit />
        <Text style={styles.textButton}>Edit</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onShare}>
        <QrCodeEdit />
        <Text style={styles.textButton}>Share</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
