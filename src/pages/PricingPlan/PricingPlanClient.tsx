import { useState } from 'react';
import PricingPlan from './PricingPlan';
import Payment from './Payment';
const PricingPlanClient = () => {
  const [isPayment, setIsPayment] = useState(false);
  return (
    <>
      {!isPayment ? (
        <PricingPlan onClick={() => setIsPayment(true)} />
      ) : (
        <Payment />
      )}
    </>
  );
};

export default PricingPlanClient;
