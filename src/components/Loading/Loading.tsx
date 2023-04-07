import React from "react";
import { IonSpinner } from "@ionic/react"
import './loading.css'

export default function Loading() {
    return (
        <div className="loading-element">
            <IonSpinner name="lines"></IonSpinner>
        </div>
    )
}