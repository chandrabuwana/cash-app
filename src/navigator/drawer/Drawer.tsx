import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../tab/Tab';
import { DrawerParamList } from './Drawer.typeDefs';
import { formatCurrency } from '@utils/helper';
import { useSelector } from 'react-redux';
import { styles } from '../../views/Home/home.style';
const Drawer = createDrawerNavigator<DrawerParamList>();

// const styles = StyleSheet.create({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//   },
// });

const drawerContents = () => {
  const balance = useSelector((state: RootState) => state.wallet.balance);
  const listTransaction = useSelector((state: RootState) => state.transactions.transactions);
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
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.walletContent}>
          <Text style={styles.titleBalance}>My Balance</Text>
          <Text style={styles.amount}>IDR {formatCurrency(balance)}</Text>
        </View>
        <View style={styles.wrapperSideContent}>
          <View style={styles.totalExpenseSide}>
            <Image source={require('@assets/images/expense-icon.png')} style={styles.icon} />
            <Text style={styles.labelExpense}>IDR {formatCurrency(totalExpenses)}</Text>
          </View>
          <View style={styles.totalIncomeSide}>
            <Image source={require('@assets/images/income-icon.png')} style={styles.icon} />
            <Text style={styles.labelExpense}>IDR {formatCurrency(totalIncome)}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MainDrawer"
      screenOptions={{ headerShown: false }}
      drawerContent={drawerContents}>
      <Drawer.Screen name="MainDrawer" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
