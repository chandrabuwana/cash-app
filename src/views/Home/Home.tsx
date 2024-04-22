import React, { useState } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, } from 'react-native';
import Button from '@components/Button';
import { StackProps } from '@navigator/stack';
import { randomUUID } from 'expo-crypto';
import { styles } from './home.style';
import AddBalanceModal from '@components/Modal/ModalAddSaldo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { formatCurrency } from '@utils/helper';
import BottomSheet from '@components/BottomSheet';
import Animated from 'react-native-reanimated';
import { TransactionModal } from '@components/Modal/ModalTransaction';
import { addTransaction } from 'src/redux/actions/transactionActions';

export default function Home({ navigation }: StackProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalTransactionVisible, setModalTransactionVisible] = useState<boolean>(false);
  const balance = useSelector((state: RootState) => state.wallet.balance);
  const listTransaction = useSelector((state: RootState) => state.transactions.transactions);
  const dispatch = useDispatch();
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const closeModalTransaction = () => {
    setModalTransactionVisible(false);
  };
  const openModalTransaction = () => {
    setModalTransactionVisible(true);
  };
  const handleSubmit = (transaction: { amount: string; title: string; type: string; }) => {

    const numericAmount = parseFloat(transaction.amount.replace(/,/g, ''));
    const body = {
      id: randomUUID(),
      title: transaction.title,
      description: transaction.title,
      amount: numericAmount,
      type: transaction.type,
      createdAt: new Date().toISOString()
    }
    dispatch(addTransaction(body));
    setModalTransactionVisible(false);
  }
  const calculateTotals = (transactions: any[]) => {
    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach((transaction: { type: string; amount: number; }) => {
      if (transaction.type === 'income') {
        totalIncome += transaction.amount;
      } else if (transaction.type === 'expense') {
        totalExpenses += transaction.amount;
      }
    });

    return { totalIncome, totalExpenses };
  };
  const { totalIncome, totalExpenses } = calculateTotals(listTransaction);
  return (
    <View style={styles.container} >
      <StatusBar barStyle="light-content" />
      <Animated.View style={styles.wrapperWallet}>
        <View style={styles.walletContent}>
          <Text style={styles.titleBalance}>My Balance</Text>
          <Text style={styles.amount}>IDR {formatCurrency(balance)}</Text>
        </View>
      </Animated.View>
      <View style={styles.wrapperTotal}>
        <View style={styles.totalExpense}>
          <Image source={require('../../../assets/images/expense-icon.png')} style={styles.icon} />
          <Text style={styles.labelExpense}>IDR {formatCurrency(totalExpenses)}</Text>
        </View>
        <View style={styles.totalIncome}>
          <Image source={require('../../../assets/images/income-icon.png')} style={styles.icon} />
          <Text style={styles.labelExpense}>IDR {formatCurrency(totalIncome)}</Text>
        </View>
      </View>
      <BottomSheet />

      <TouchableOpacity style={styles.addButton} onPress={openModalTransaction}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <AddBalanceModal visible={modalVisible} onClose={closeModal} />
      <TransactionModal visible={modalTransactionVisible} onDismiss={closeModalTransaction} onSubmit={handleSubmit} />
    </View>
  );
}
