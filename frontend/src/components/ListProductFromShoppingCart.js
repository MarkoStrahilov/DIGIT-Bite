import React, {useEffect, useState} from 'react';
import {auth, db, storage} from '../repository/firebase/firebase';
import {useNavigate} from 'react-router-dom';
import firebase from 'firebase';

const ListProductFromShoppingCart = () => {
    const [userUid, setUserUid] = useState(null);
    const [cartProducts, setCartProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserUid(user.uid);
                // console.log('This is the user: ', user.uid);

                // Ensure the user is authenticated before fetching cart items
                fetchCartProducts(user.uid);
            } else {
                // No user is signed in.
                setUserUid(null);
                console.log('There is no logged in user in list product from shopping cart');
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    const fetchCartProducts = (uid) => {
        db.collection('Cart ' + uid).onSnapshot((snapshot) => {
            const newCartProduct = snapshot.docs.map((doc) => ({
                mealId: doc.id,
                ...doc.data(),
            }));
            // console.log('snapshot', snapshot.docs);
            setCartProducts(newCartProduct);
            // console.log('new cart product in list', newCartProduct);
        });
    };

    console.log('user UID', userUid);
    console.log('cart products', cartProducts);

    return (
        {cartProducts}
    );
};

export default ListProductFromShoppingCart;
