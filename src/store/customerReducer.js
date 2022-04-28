export const GET_CUSTOMER="GET_CUSTOMER";
export const ADD_CUSTOMER="ADD_CUSTOMER";
export const REMOVE_CUSTOMER="REMOVE_ CUSTOMER";



const defaultState = {
    customer: [
        // {id: 1, name: "Maks"},
        // {id: 2, name: "Vlad"},
        // {id: 3, name: "Diana"},
        // {id: 4, name: "Vova"}
    ]
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        // case GET_CUSTOMER:
        //     return {
        //         ...state,
        //         customers:state.customer
        //     }

      case ADD_CUSTOMER :
           return {
               ...state,
               customer:[...state.customer, action.payload]
           }
  
     case REMOVE_CUSTOMER :
          return {
              ...state,
              customer:state.customer.filter(customer=>customer.id!==action.payload)
          }
  
     default:
         return state
    } 
}

export const addCustomerAC=(payload)=>({type:ADD_CUSTOMER, payload})