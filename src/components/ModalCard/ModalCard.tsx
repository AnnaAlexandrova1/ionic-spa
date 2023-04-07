import React from 'react';
import {  IonItem, IonLabel, IonThumbnail, IonButton } from '@ionic/react';

import './modalCard.css'

interface ModalCard {
    img: string, 
    name: string, 
    id: number, 
    deleteBeer: Function
}

export default function ModalCart({img, name, id, deleteBeer}: ModalCard ) {   
    return (
         <IonItem>
            <IonThumbnail slot="start">
              <img className='img-selected' alt={name} src={img} />
            </IonThumbnail>
            <IonLabel>{name}</IonLabel>
            <IonButton color="warning" onClick={() => {deleteBeer(id)}}>Удалить</IonButton>
          </IonItem>
    )
}