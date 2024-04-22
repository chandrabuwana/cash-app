import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import { styles } from '@components/BottomSheet/bottomSheet.style';
import { formatCurrency } from '@utils/helper';

const TransactionList = ({
  transactions,
  filterType,
}: {
  transactions: any[];
  filterType: string;
}) => {
  const filteredTransactions = _.filter(transactions, { type: filterType });
  const formatAmountDisplay = (type, amount) => {
    const formattedAmount = formatCurrency(amount);
    return type === 'expense' ? ` - ${formattedAmount} IDR` : `+ ${formattedAmount} IDR`;
  };
  if (_.isEmpty(transactions)) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No transactions yet!</Text>
        <Text style={styles.emptyText}>Tap the "+" icon to add your first transaction.</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      {filteredTransactions.map((transaction) => (
        <View key={transaction.id} style={styles.transaction}>
          <View>
            <Text style={styles.title}>{transaction.title}</Text>

          </View>
          <View>
            <Text style={[styles.amount, { color: transaction.type === 'income' ? '#00A96B' : '#FD3C4A' }]}>
              {formatAmountDisplay(transaction.type, transaction.amount)}
            </Text>
            <Text style={styles.date}>
              {moment(transaction.createdAt).format("DD MMM YY HH:mm")}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default TransactionList;
