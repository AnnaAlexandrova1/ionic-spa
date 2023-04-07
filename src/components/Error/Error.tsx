import React from "react";
import { IonText } from "@ionic/react"
import './error.css'

export default function Error() {
    return (
        <div className="error-element">
            <IonText color="warning">Что-то пошло не так... попробуйте позже</IonText>
        </div>
    )
}