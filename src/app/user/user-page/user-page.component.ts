import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';

export class UsersModel {
  name!: string;
  age!: string;
  email!: string;
  role!: string;
}

const users = [
  { name: 'Michael', age: '29', email: 'mike@gmail.com', role: 'Admin' },
  { name: 'Sarah', age: '29', email: 'sarah@example.com', role: 'User' },
  { name: 'John', age: '32', email: 'john.doe@example.com', role: 'User' },
  { name: 'Alice', age: '29', email: 'alice@example.com', role: 'Admin' },
  { name: 'Tom', age: '40', email: 'tom@example.com', role: 'User' },
  { name: 'Emma', age: '19', email: 'emma123@gmail.com', role: 'Admin' },
  { name: 'David', age: '22', email: 'david@domain.com', role: 'User' },
  { name: 'Sophia', age: '35', email: 'sophia@sample.com', role: 'User' },
  { name: 'James', age: '27', email: 'james789@gmail.com', role: 'Admin' },
  { name: 'Olivia', age: '30', email: 'olivia@workplace.com', role: 'User' },
];

// let customers:any=[];
//  customers =  users

export class LoginModel {
  name!: string;
  age!: string;
  email!: string;
  role!: string;
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  customers: any = [];

  viewComponent: boolean = false;
  allUsers: UsersModel[] = [];

  ngOnInit(): void {
    this.allUsers = users;

    // console.log('Hello world')
    console.log('data:', this.allUsers);

    // this.allUsers = users
  }

  cli!: number;
  sel!: string;
  data: LoginModel;
  searchQuery!: String;

  // name : UsersModel
  // allUsers: LoginModel[] = [];

  constructor() {
    this.data = new LoginModel();

    // this.name = new UsersModel();
  }

  sendData(info: NgForm) {
    console.log('Data from form:', { ...this.data });
    const user = this.allUsers[this.cli];
    console.log('the user', user);
    if (user) {
      // this.allUsers.push({ ...this.data });
      this.allUsers[this.cli] = this.data;
      // info.resetForm({...this.data})
    } else {
      console.log('user does not exist');
      // this.allUsers[this.cli] = this.data;
      this.allUsers.push({ ...this.data });
      //  info.resetForm({})
    }
    //  info.resetForm()
    //  if(this.cli === ){
    // this.allUsers.push({ ...this.data });
    // console.log("All users:", [this.allUsers])
    //   } else {
    // this.allUsers[this.cli] = this.data
    // }

    // info.resetForm()
  }

  trigger() {
    console.log(this.data.name);
  }

  edit(index: number, people: UsersModel) {
    this.cli = index;
    console.log('this is going to be edited');
    this.data = people;
    // this.allUsers[index] = this.data
    console.log('user updated', this.allUsers);
  }

  remove(index: number) {
    console.log('');
    console.log('This is the original array:', index);

    const customers = this.allUsers.filter((user, i) => i !== index);

    console.log('Updated array:', customers);
    this.allUsers = customers;
  }

  searchedItem: any = [];
  search() {
    // console.log("let's find");
    console.log('finding:' + this.searchQuery);
    console.log(users)
    if (this.searchQuery) {
      this.searchedItem = this.allUsers.filter((user: UsersModel) => 
        user.name.toLowerCase() === this.searchQuery.toLowerCase()
      );
      console.log(this.searchedItem);
      return  this.allUsers = this.searchedItem;
    } else {
      console.log("no user")
      return this.allUsers = users;
    }
  }
  clear(){
    if (this.searchQuery === ''){
    console.log (this.allUsers)
    return this.allUsers = users;
    } else {
     return null
    }
  }
}
// search(person:UsersModel) {
//  Filter users based on the typed input
//  const searchedItems = this.allUsers.filter((users) =>
//  users.name);
//  console.log(searchedItems);

//  return searchedItems;
// }

// searchedItem: any[] = []; // Array to store filtered results

//  search(name: string) {
// console.log("Searching for:", name);

// Check if the input is empty
// if (!name.trim()) {
// this.searchedItem = this.allUsers; // Reset to show all users if no input
// console.log("Search input is empty. Showing all users.");
// return;
// }

// Filter the allUsers array based on the input name
//  this.searchedItem = this.allUsers.filter((user: { name: string }) =>
//  user.name.toLowerCase().includes(name.toLowerCase()) // Case-insensitive search
//  );

// console.log("Filtered Users:", this.searchedItem);
// }

// searchedItem:any=[]
// search(name:string){
//  console.log("let's find", this.allUsers)
//  console.log("finding")
//  const searchedItem = this.allUsers.filter((user) => {
//   user.name
//    if(name === user.name ) {
//      return true;
//   }  else{
//    return false
//    };
//    })
//    console.log('search');
//     this.allUsers = searchedItem;
//     console.log(searchedItem)
//      }
//    }
//  remove(index:number){
// for (let i = 0; i<this.allUsers.length; i++){
//  if (i !== index) {
//  console.log("work", i, index)
// this.customers.push(this.allUsers[i])

// }
//  }
//  console.log("new", this.customers);
//  this.allUsers = this.customers;
// }
// remove(index:UsersModel){
//  users.filter(i => i !== index );
//  return (users);
//  }
// let customers = users.filter( (users, i) => index !== index)
// remove(index:Number){
//    console.log("this is an array to be filtered")
//    const customers = users.filter( (users,i)=>  i !== index);
//    console.log("new", customers)
//    users =  customers
//  this.customers.push(this.users)
//  }
//   remove(index: number){
//     console.log("This is the original array:", this.allUsers);

//     const customers = this.allUsers.filter((users, i) => i !== index);

//     console.log("Updated array:", customers);
//     this.allUsers = customers;
//   }
//  }
