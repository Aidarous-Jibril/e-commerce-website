import React from 'react';
import axios from 'axios';
import  M from 'materialize-css/dist/js/materialize.min.js'
import StripeCheckout from 'react-stripe-checkout';


const StripePaymentsButton = ({price}) => {
    const totalPriceForStripe = price * 100;
    const publisheableKey =  'pk_test_RzGqGLi6SMcG89NC0XhEfglg001P2xHdMu'

    //token passes into backend req, token contains all info about payment
    const onToken = token => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                token,
                amount: totalPriceForStripe
            }
        }).then(response => {
        M.toast({html: 'succesful payment'})
        })
        .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        M.toast({html: 'here was an issue with your payment! Please make sure you use the provided credit card.'})
        });
    }

    return (
        <div className=''>
            <StripeCheckout 
                label='Pay Now'
                name= 'Haad Store Ltd'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Total amount to pay is $${price}` }
                amount={totalPriceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publisheableKey}
            />
        </div>
    );
}

export default StripePaymentsButton;
