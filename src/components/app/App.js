import React, { Component } from 'react';
// import logo from '../../logo.svg';
import Table from '../table';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const tableHeadData = [
  {title: 'Name', datakey: 'name'},
  {title: 'Username', datakey: 'username'},
  {title: 'Email', datakey: 'email'},
  {title: 'Phone', datakey: 'phone'},
  {title: 'Website', datakey: 'website'}
];

const defaultData =[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
]

class App extends Component {
  componentDidMount=()=>{
      // fetch('https://jsonplaceholder.typicode.com/users').then((resp)=>{
      //   return resp.json();
      // }).then((data)=>{
      //   this.setState({
      //     users: data
      //   });
      // }).catch(()=>{
      //   this.setState({
      //     users: defaultData
      //   });
      // });
      this.setState({
        users: defaultData
      });
  }
  constructor(props){
    super(props);
    this.state = {users:[]}
  }
  render() {
    const view = this.state.users.length ? 
      <Table headData={tableHeadData} bodyData={this.state.users}/> :
      <div>Fetching data...</div>;
    return (
      <div className="App">
        {view}
      </div>
    );
  }
}

export default App;