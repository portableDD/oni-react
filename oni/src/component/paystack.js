import React, { Component } from 'react'
import { PaystackButton } from 'react-paystack'
// import PaystackWebView from 'react-native-paystack-webview'

 class Paystack extends Component {
    render() {
        const publicKey = "pk_test_82ce23694563611af6015b7bdfc1dd4a1f044acf"
        const email = this.props.email
        const name = this.props.name
        const phone = this.props.phone
        const amount = this.props.amount + '00'

        const componentProps = {
            email,
            amount,
            metadata: {
              name,
              phone,
            },
            publicKey,
            text: "Pay Now",
            onSuccess: () =>
              alert("Thanks for doing business with us! Come back soon!!"),
            onClose: () => alert("Wait! Don't leave :("),
          }
        return (
                 
                    <PaystackButton {...componentProps}   />
                
        )
    }
}


export default Paystack