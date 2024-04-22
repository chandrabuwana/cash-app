import React, { useEffect, useState } from 'react';
import {
  Modal, View, TouchableOpacity, Text, TextInput, StyleSheet
} from 'react-native'
import Button from '@components/Button';
import { styles } from './modal.style';
import { formatNumber } from '@utils/helper';

export const TransactionModalEdit = ({
  visible,
  onDismiss,
  onSubmit,
  initialTransaction
}: {
  visible: boolean;
  onDismiss: () => void;
  onSubmit: (data: {
    title: string;
    amount: number;
    type: "expense" | "income";
  }) => void;
  initialTransaction: {
    title: string;
    amount: number;
    type: "expense" | "income";
  }
}) => {
  const [titleState, setTitle] = useState('');
  const [amountState, setAmount] = useState(0);
  const [typeState, setType] = useState<"expense" | "income">(initialTransaction?.type ?? 'expense');

  useEffect(() => {
    if (initialTransaction) {
      setTitle(initialTransaction.title);
      setAmount(initialTransaction.amount);
    }
  }, [initialTransaction])


  const handleAmountChange = (text: string) => {
    const formattedText = formatNumber(text);
    setAmount(formattedText);
  };
  const handleSubmit = () => {
    onSubmit({
      title: titleState,
      amount: parseFloat(amountState.replace(/,/g, '')),
    });

    setTitle("");
    setAmount("");
    setType('expense');
  };

  return (
    <Modal visible={visible} onDismiss={onDismiss} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Title</Text>
          <TextInput
            editable
            style={styles.input}
            value={titleState}
            onChangeText={setTitle}
            maxLength={20}
            placeholder='Enter title'
          />
          <Text>Amount</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amountState.toString()}
            onChangeText={handleAmountChange}
            placeholder="Enter amount"
          />
          <View style={styles.wrapperSubmit}>
            <Button title='Cancel' titleStyle={styles.titleCancel} style={styles.buttonCancel} onPress={onDismiss} />
            <Button title="Submit" onPress={handleSubmit} titleStyle={styles.titleAdd} style={styles.buttonAdd} />
          </View>
        </View>

      </View>
    </Modal>
  );
};



