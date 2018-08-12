import React from 'react';
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from './src/MyStoreCheckout';

const Stripe = () => {
  return (
    <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
      <MyStoreCheckout />
    </StripeProvider>
  );
};

export default Stripe;