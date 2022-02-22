import './Expenses.css';
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';




class Expenses extends React.Component {

  



 // const[title,setTitle] = useState(title);

  constructor() {

    super();
    this.state = {
      userDatas: [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
        {
          id: 'e5',
          title: 'olf Desk (iron)',
          amount: 450,
          date: new Date(2001, 5, 12),
        }]
    }
  
  
  
  
  }



  render() {
    
   
    const data = this.state.userDatas;
    console.log(data);
        const clickHandler = (id) => {
        const newState = this.state;
         const userDatas = [...newState.userDatas];
         console.log(userDatas);
         const index =  userDatas.findIndex(m=>m.id === id)
         userDatas[index].title  = 'Update'
         this.setState(newState);
        console.log(id);
        }

 
    const listItems = data.map((d) =>  
        <li className='expense-item'> 
           <ExpenseDate date={d.date} />
           <div className='expense-item__description'>
         
         <div className='expense-item__price'>
           {d.amount}
         </div>
         <h2>{d.title}</h2>
         <button onClick={() => clickHandler(d.id)}>Title Clicked</button>
        </div>
      </li>
      );
    
    return (
     <Card className='expenses'>
      <div>
          { listItems }
      </div>
      </Card>
    );


  }
}
export default Expenses;

