import React, { useState } from 'react';
import { View, TextInput, Modal, Text } from 'react-native';
import { randomUUID } from 'expo-crypto';
import { useDispatch } from 'react-redux';
import Button from '@components/Button';
import { styles } from './modal.style';
import { formatNumber } from '@utils/helper';
import { addTransaction } from 'src/redux/actions/transactionActions';

interface AddBalanceModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddBalanceModal: React.FC<AddBalanceModalProps> = ({ visible, onClose }) => {
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useDispatch();

  const handleAddBalance = () => {
    const numericAmount = parseFloat(amount.replace(/,/g, ''));
    if (!isNaN(numericAmount)) {
      const transaction = {
        id: randomUUID(),
        title: 'Add Balance',
        description: 'Added balance',
        amount: numericAmount,
        type: 'income',
        createdAt: new Date().toISOString()
      };
      dispatch(addTransaction(transaction));
    }
    setAmount('');
    onClose();
  };

  const handleAmountChange = (text: string) => {
    const formattedText = formatNumber(text);
    setAmount(formattedText);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.titleModal}>
            Add Balance
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
            placeholder="Enter amount"
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} titleStyle={styles.titleCancel} style={styles.buttonCancel} />
            <Button title="Add Balance" titleStyle={styles.titleAdd} style={styles.buttonAdd} onPress={handleAddBalance} />
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default AddBalanceModal;
function uuidv4() {
  throw new Error('Function not implemented.');
}

