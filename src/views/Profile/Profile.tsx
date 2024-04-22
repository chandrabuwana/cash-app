import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { StackProps } from '@navigator/stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/redux/store';
import moment from 'moment'
import _ from 'lodash'
import { styles } from './profile.style';
import { formatCurrency } from '@utils/helper';
import { deleteTransaction, updateTransaction } from 'src/redux/actions/transactionActions'; // Adjust import paths as needed
import { addBalance, subtractBalance } from 'src/redux/actions/walletActions';
import { TransactionModalEdit } from '@components/Modal/ModalTransactionEdit';
import DeleteModal from '@components/Modal/ModalDelete';

export default function Profile({ navigation }: StackProps) {
  const dispatch = useDispatch();
  const listTransaction = useSelector((state: RootState) => state.transactions.transactions);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [transactionIdToDelete, setTransactionIdToDelete] = useState('');


  const formatAmountDisplay = (type: string, amount: number) => {
    const formattedAmount = formatCurrency(amount);
    return type === 'expense' ? ` - ${formattedAmount} IDR` : `+ ${formattedAmount} IDR`;
  };

  const handleDeleteModal = (id: string) => {
    setTransactionIdToDelete(id);
    setModalDeleteVisible(true)
  };
  const handleDeleteClose = () => {
    setModalDeleteVisible(false)
    setTransactionIdToDelete('');
  };

  // const handleDeleteSubmit = () => {
  //   const transaction = listTransaction.find((t) => t.id === transactionIdToDelete);
  //   if (!transaction) {
  //     console.error('Transaction not found');
  //     return;
  //   }

  //   if (transaction.type === 'income') {
  //     dispatch(subtractBalance(transaction.amount));
  //   } else if (transaction.type === 'expense') {
  //     dispatch(addBalance(transaction.amount));
  //   }

  //   dispatch(deleteTransaction(transactionIdToDelete));
  //   setModalDeleteVisible(false);
  //   setTransactionIdToDelete('');
  // };
  const handleDeleteSubmit = () => {
    const transaction = listTransaction.find((t) => t.id === transactionIdToDelete);
    if (!transaction) {
      console.error('Transaction not found');
      return;
    }

    if (transaction.type === 'income') {
      dispatch(subtractBalance(transaction.amount));
    } else if (transaction.type === 'expense') {
      dispatch(addBalance(transaction.amount));
    }

    dispatch(deleteTransaction(transactionIdToDelete));
    setModalDeleteVisible(false);
    setTransactionIdToDelete('');
  };



  const handleEdit = (transaction: Transaction | React.SetStateAction<null>) => {
    setCurrentTransaction(transaction);
    setModalVisible(true);
  };
  const handleModalSubmit = (data: Transaction) => {
    if (currentTransaction) {
      const updatedTransaction = { ...currentTransaction, ...data };
      if (
        updatedTransaction.type !== currentTransaction.type ||
        updatedTransaction.amount !== currentTransaction.amount
      ) {
        if (updatedTransaction.type === 'income') {
          if (currentTransaction.type === 'expense') {
            dispatch(addBalance(currentTransaction.amount));
          }
          dispatch(subtractBalance(currentTransaction.amount));
          dispatch(addBalance(updatedTransaction.amount));
        } else if (updatedTransaction.type === 'expense') {
          if (currentTransaction.type === 'income') {
            dispatch(subtractBalance(currentTransaction.amount));
          }
          dispatch(addBalance(currentTransaction.amount));
          dispatch(subtractBalance(updatedTransaction.amount));
        }
      }

      dispatch(updateTransaction(updatedTransaction));
    }
    setModalVisible(false);
    setCurrentTransaction(null);
  };

  const handleModalDismiss = () => {
    setModalVisible(false);
    setCurrentTransaction(null);
  };
  console.log('currentTransaction', currentTransaction)
  if (_.isEmpty(listTransaction)) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No transactions yet!</Text>
        <Text style={styles.emptyText}>Tap the "+" icon to add your first transaction.</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.labelAll}>All Transaction</Text>
      <ScrollView style={styles.wrapperScrollView} contentContainerStyle={{ flexGrow: 1 }}>
        {listTransaction.map(transaction => (
          <View key={transaction.id} style={styles.transaction}>
            <View>
              <Text style={styles.title}>{transaction.title}</Text>
            </View>
            <View style={styles.wrapperLeft}>
              <View>
                <Text style={[styles.amount, { color: transaction.type === 'income' ? '#00A96B' : '#FD3C4A' }]}> {formatAmountDisplay(transaction.type, transaction.amount)}</Text>
                <Text style={styles.date}>{moment(transaction.createdAt).format('DD MMM YYYY HH:mm')}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => handleEdit(transaction)}>
                  <Image source={require('@assets/images/settings.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                  handleDeleteModal(transaction.id)
                  // console.log(transaction.id)
                }>
                  <Image source={require('@assets/images/trash.png')} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TransactionModalEdit
        visible={modalVisible}
        onDismiss={handleModalDismiss}
        onSubmit={handleModalSubmit}
        initialTransaction={currentTransaction}
      />
      <DeleteModal
        visible={modalDeleteVisible}
        onSubmit={handleDeleteSubmit}
        onDismiss={handleDeleteClose} />
    </View>
  );
}
