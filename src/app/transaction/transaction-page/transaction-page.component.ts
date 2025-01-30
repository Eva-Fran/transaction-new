import { Component, OnInit } from '@angular/core';

export class TransactionModel{
  transactionId!:string
  product!:string
  amount!:string
  transactionStatus!:string
}
const transactions = [
  {transactionId: '00000120', product: 'Nike Airforce 1', amount: '$70', transactionStatus: 'pending'},
  {transactionId: '00000121', product: 'Adidas Ultraboost', amount: '$130', transactionStatus: 'completed'},
  {transactionId: '00000122', product: 'Apple AirPods Pro', amount: '$199', transactionStatus: 'completed'},
  {transactionId: '00000123', product: 'Samsung Galaxy S23', amount: '$999', transactionStatus: 'pending'},
  {transactionId: '00000124', product: 'PlayStation 5', amount: '$499', transactionStatus: 'completed'},
  {transactionId: '00000125', product: 'Nike Air Max 97', amount: '$140', transactionStatus: 'pending'},
  {transactionId: '00000126', product: 'MacBook Pro 13"', amount: '$1,299', transactionStatus: 'completed'},
  {transactionId: '00000127', product: 'Bose QuietComfort 45', amount: '$329', transactionStatus: 'pending'},
  {transactionId: '00000128', product: 'Canon EOS R5', amount: '$3,899', transactionStatus: 'completed'},
  {transactionId: '00000129', product: 'HP Spectre x360', amount: '$1,599', transactionStatus: 'pending'}
];
@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss']
})
export class TransactionPageComponent implements OnInit{
  
  viewComponent:boolean = false
  allTransactions:TransactionModel[] = []

  ngOnInit(): void {

    this.allTransactions = transactions


    // console.log('Hello world')
    console.log('data:', this.allTransactions)


    // this.allUsers = users
  }
   }
  
  
