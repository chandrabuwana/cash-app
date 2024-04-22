import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { styles } from './bottomSheet.style';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { formatCurrency } from '@utils/helper';
import moment from 'moment'
import _ from 'lodash'
import TransactionList from '@components/List/TransactionList';
const { height } = Dimensions.get('window');

const BottomSheet = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'expenses' | 'receives'>('all');
  const bottomSheetHeight = useSharedValue(height - 0 - 40); // Set initial height to full height below wrapperWallet with margin 20
  const listTransaction = useSelector((state: RootState) => state.transactions.transactions);

  const animatedStyles = useAnimatedStyle(() => ({
    height: withTiming(bottomSheetHeight.value),
    top: 20,
  }));

  const handleTabPress = (tab: 'all' | 'expenses' | 'receives') => {
    setSelectedTab(tab);
  };
  const formatAmountDisplay = (type, amount) => {
    const formattedAmount = formatCurrency(amount);
    return type === 'expense' ? ` - ${formattedAmount} IDR` : `+ ${formattedAmount} IDR`;
  };
  const renderContent = () => {
    switch (selectedTab) {
      case 'all':
        if (_.isEmpty(listTransaction)) {
          return (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No transactions yet!</Text>
              <Text style={styles.emptyText}>Tap the "+" icon to add your first transaction.</Text>
            </View>
          );
        }
        return (
          <ScrollView style={styles.container}>
            {listTransaction.map(transaction => (
              <View key={transaction.id} style={styles.transaction}>
                <View>
                  <Text style={styles.title}>{transaction.title}</Text>
                </View>
                <View>
                  <Text style={[styles.amount, { color: transaction.type === 'income' ? '#00A96B' : '#FD3C4A' }]}> {formatAmountDisplay(transaction.type, transaction.amount)}</Text>
                  <Text style={styles.date}>{moment(transaction.createdAt).format('DD MMM YYYY HH:mm')}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )
      case 'expenses':
        return <TransactionList transactions={listTransaction} filterType="expense" />;
      case 'receives':
        return <TransactionList transactions={listTransaction} filterType="income" />;
      default:
        return null;
    }
  };

  return (
    <PanGestureHandler>
      <Animated.View style={[styles.bottomSheet, animatedStyles]}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'all' && styles.selectedTab]}
            onPress={() => handleTabPress('all')}
          >
            <Text style={styles.tabText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'expenses' && styles.selectedTab]}
            onPress={() => handleTabPress('expenses')}
          >
            <Text style={styles.tabText}>Expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'receives' && styles.selectedTab]}
            onPress={() => handleTabPress('receives')}
          >
            <Text style={styles.tabText}>Income</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {renderContent()}

        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};



export default BottomSheet;
