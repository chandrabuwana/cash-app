import React, { useState } from 'react';
import { View, TextInput, Modal, Text } from 'react-native';
import { randomUUID } from 'expo-crypto';
import { useDispatch } from 'react-redux';
import Button from '@components/Button';
import { styles } from './modal.style';
import { formatNumber } from '@utils/helper';
import { addTransaction } from 'src/redux/actions/transactionActions';

interface DeleteModalProps {
  visible: boolean;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ visible, onSubmit, onDismiss, }) => {

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.titleModal}>
            Are you sure to remove transaction?
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Remove" titleStyle={styles.titleAdd} style={styles.buttonAdd} onPress={onSubmit} />
            <Button title="Cancel" titleStyle={styles.titleCancel} style={styles.buttonCancel} onPress={onDismiss} />
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default DeleteModal;

