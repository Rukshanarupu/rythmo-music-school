
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useContext, useEffect, useState } from 'react';
import useAxios from '../../../../Hooks/useAxios';
import { AuthContext } from '../../../../providers/AuthProvider';
import toast from 'react-hot-toast';
import './Checkout.css'

const CheckoutForm = ({price, selectClass}) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxios()
    const [payError, setPayError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    console.log(clientSecret)
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setPayError(error.message);
        }
        else {
            setPayError('');
            // console.log('payment method', paymentMethod)
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent.status)
        // console.log(selectClass)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: selectClass.length,
                items: selectClass.map(item => item._id),
                classItem: selectClass.map(item => item.classId),
                status: 'service pending',
                classNames: selectClass.map(item => item.className),
                schedule:selectClass.map(item => item.schedule),
                duration:selectClass.map(item => item.duration),
                instructor: selectClass.map(item => item.instructorName),
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data.insertResult);
                    if (res.data.insertResult.insertedId) {
                        toast.success("display confirm")
                    }
                })
        }
        

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='mx-20 w-2/4' >
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button 
                disabled={!stripe || !clientSecret || processing}
                className='btn-sm px-5 rounded mt-5 bg-primary border-0 font-semibold'>
                    {`Pay ${price} $`}
                </button>
            </form>
            {payError && <p className='text-red-600 ml-8'>{payError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete and your transaction Id is {transactionId}</p>}
                
        </div>
    );
};

export default CheckoutForm;