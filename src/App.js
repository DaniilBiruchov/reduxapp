import { useSelector, useDispatch} from "react-redux";
import { ADD_CASH, GET_CASH } from "./store/cashReducer";
import './App.css';
import { addCustomerAC, REMOVE_CUSTOMER} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
 

  const cash = useSelector(state => state.cash.cash)
  const customer = useSelector(state => state.customer.customer)


  const addCash = (cash) => {
    dispatch({type: ADD_CASH, payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: GET_CASH, payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAC(customer))
    console.log(customer)
  }

  const removeCustomer = (id) => {
    dispatch({type: REMOVE_CUSTOMER, payload: id})
    console.log(id)
  }
  
  return (
    <div className="App">
      <div style={{fontSize:35}}>{cash}</div>
         <div className="container">
            <button className="btn" onClick={()=>addCash(Number(prompt()))}>Add</button>
            <button className="btn" onClick={()=>getCash(Number(prompt()))} >GET</button>
         </div>
         <div>
           {customer.length > 0 
           ?<div>{customer.map(item => <div key={item.id} onClick={() => removeCustomer(item.id)}>{item.name}</div>)}</div>
           :<div>No customers</div>
           }
           <button onClick={() => addCustomer(prompt())}>Add customer</button>
         </div>
    </div>
  );
}

export default App;
