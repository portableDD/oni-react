import React from 'react'
import { PaystackButton } from 'react-paystack'

  function paystack(props) {
    const config = {
        reference: (new Date()).getTime(),
        email: "emmanueldorcas15@gmail.com",
        amount: 200000,
        publicKey: "pk_test_82ce23694563611af6015b7bdfc1dd4a1f044acf",
    }; 

    const handlePaystackSuccessAction = (reference) => {
        alert("Transaction complete!! Thanks for doing business with us! Come back soon!!")
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
      };
  
      // you can call this function anything
      const handlePaystackCloseAction = () => {
        alert("Wait! Transaction cancelled :(")
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }
  
      const componentProps = {
          ...config,
          text: 'Pay now',
          onSuccess: (reference) => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
     return (
         <div>
              <PaystackButton {...componentProps} />
         </div>
     )
 }
 
 export default paystack