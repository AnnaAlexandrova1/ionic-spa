import React, { Component } from 'react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCol,
    IonRow,
    IonInput,
    IonText,
} from '@ionic/react';
import { compose } from 'recompose';
import { useNavigate  } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../service/routes/routes';
import './signin.css';
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    showForgotPasswordAlert: false
};

export default function Signin () {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Sign In</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonRow class="row">
                        <div>
                            <IonText><h2>Sign In</h2></IonText>
                        </div>
                    </IonRow>
                </IonContent >
            </IonPage >
        );
    
}

