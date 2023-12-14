import React, {useEffect, useState} from 'react'
import {Box} from '@chakra-ui/react'
// import 'firebase/database'
import firebaseConfig from '../repository/firebase/firebase'
import firebase from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import SideDrawer from "../components/Drawer";



const About = (item) => {

    const navigate = useNavigate();


    function GetUserUid() {
        const [uid, setUid] = useState(null);

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUid(user.uid);
                console.log('This is the user: ', user)
            } else {
                // No user is signed in.
                setUid(null);
                console.log('There is no logged in user');
            }
        });

        return uid;
    }

    const userUid = GetUserUid();

    const AddToCart = (product) => {
        if(userUid !== null) {
            console.log("we have logged in user and product");
        } else {
            navigate("/login");
        }
    }

    // const [cart, setCart] = useState([]);
    //
    //
    // useEffect(() => {
    //     if(!firebase.apps.length) {
    //         firebase.initializeApp(firebaseConfig)
    //     }
    // }, [firebaseConfig])
    //
    // const addToCart = (product) => {
    //     setCart([..cart, product]);
    //
    //     const dbRef = firebase.database().ref
    // }



    return (
        <div>
            <SideDrawer/>
            {/*<button onClick={() => addToCart(data)}></button>*/}
            <Box>
                About
            </Box>
        </div>

    )
}

export default About