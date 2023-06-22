import BoardBanner from "../../../../Components/BoardBanner";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedClass from "../../../../Hooks/useSelectedClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [selectClass]=useSelectedClass()
    const totalPrice = selectClass.reduce((sum, item) => sum + item.price, 0);
    console.log(selectClass)
    return (
        <div>
            <BoardBanner
                img="https://melody-html.ancorathemes.com/images/bg3-Parallax.jpg"
                title="Please start your payment"
                direction="Payment"
            ></BoardBanner>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectClass={selectClass} price={totalPrice}/>
            </Elements>
        </div>
    );
};

export default Payment;