import axios from "axios"
import { loadStripe } from '@stripe/stripe-js'; 

export const getProducts = () => {
    return new Promise((onSuccess, onFail) => {
        axios.get('/api/products', {
            headers: {
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjMzNWE3NjM4ZWE5M2ZhODI5NjdlNGMiLCJpYXQiOjE2NDk0MzA1MDgsImV4cCI6MTY0OTUxNjkwOH0.AJTBgCWw-RPTv2fjlTcaR_DehND81DRLfXsbKQerTqU',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response, error) => {
                if (!response || error) { return onFail(`Response failure ${error}`) }
                onSuccess(response)
        })
    })
}
export const getUser = (email, password) => {
    return new Promise((onSuccess, onFail) => {
        axios.post('/api/auth/login', { email, password })
            .then((response, error) => {
                if (!response || error) { return onFail(`Response failure ${error}`) }
                onSuccess(response.data)
            }).catch(err => onFail(err))
    })
}
export const addUser = body => {
    return new Promise((onSuccess, onFail) => { 
        axios.post('/api/auth/signup', body)
            .then((response, error) => {
                if (error) { return onFail(`error adding new post : ${error}`)}
                onSuccess(`new user successfully created ${response}`)
            }).catch(err => onFail(err))
    })
}   
export const addOrder = body => {
    return new Promise((onSuccess, onFail) => { 
        axios.post('/api/orders/add', body)
            .then((response, error) => {
                if (error) { return onFail(`error adding new post : ${error}`)}
                onSuccess(`new order successfully created ${response}`)
            }).catch(err => onFail(err))
    })  
}
export const processPayment = async (order) => {
    const stripePromise = loadStripe('pk_test_Y5ScLHaUyFGQYd13cNJeEMFx');
    const stripe = await stripePromise
    axios
        .post('/api/create-checkout-session', order)
        .then(response => { 
            const result = stripe.redirectToCheckout({ sessionId: response.data.id });
            if (result.error) { console.log(result.error) }
        })
        .catch(err => console.log(err))
}
