import React, { useState } from 'react';
import {
  Modal, View, TouchableOpacity, Text, TextInput, StyleSheet
} from 'react-native'
import Button from '@components/Button';
import { styles } from './modal.style';
import { formatNumber } from '@utils/helper';

export const TransactionModal = ({
  visible,
  onDismiss,
  onSubmit,

}: {
  visible: boolean;
  onDismiss: () => void;
  onSubmit: (data: {
    title: string;
    amount: string;
    type: "expense" | "income";
  }) => void;
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"expense" | "income">("expense");

  const handleAmountChange = (text: string) => {
    const formattedText = formatNumber(text);
    setAmount(formattedText);
  };
  const handleSubmit = () => {
    onSubmit({
      title,
      amount,
      type
    });

    setTitle("");
    setAmount("");
  };

  const RadioButton = ({
    label,
    onPress,
    isSelected
  }: {
    label: string;
    value: string;
    onPress: () => void;
    isSelected: boolean;
  }) => {
    const styless = StyleSheet.create({
      radioButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
      },
      radio: {
        width: 150,
        height: 40,
        borderRadius: 10,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isSelected ? "#3987db" : "transparent",
      },
      label: {
        fontSize: 14,
        fontWeight: '700',
        color: isSelected ? "white" : "black",
      }
    });
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styless.radioButton}>
          <View
            style={styless.radio}
          >
            <Text style={styless.label}>{label}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Modal visible={visible} onDismiss={onDismiss} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Title</Text>
          <TextInput

            style={styles.input}
            value={title}
            onChangeText={setTitle}
            maxLength={20}
            placeholder='Enter title'
          />
          <Text>Amount</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
            placeholder="Enter amount"
          />
          <Text style={styles.labelTransaction}>Choose Transaction :</Text>
          <View style={styles.wrapperRadio}>
            <RadioButton
              label="Expense"
              value="expense"
              isSelected={type === 'expense'}
              onPress={() => setType('expense')}
            />
            <RadioButton
              label="Income"
              value="income"
              isSelected={type === 'income'}
              onPress={() => setType('income')}
            />
          </View>
          <View style={styles.wrapperSubmit}>
            <Button title='Cancel' titleStyle={styles.titleCancel} style={styles.buttonCancel} onPress={onDismiss} />
            <Button title="Submit" onPress={handleSubmit} titleStyle={styles.titleAdd} style={styles.buttonAdd} />
          </View>
        </View>

      </View>
    </Modal>
  );
};



