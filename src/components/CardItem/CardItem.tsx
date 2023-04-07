import React from "react";

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react'
import { IBeerItem } from "../../service/interfaces/interfaces";
import './cardItem.css'

interface CartItemProps {
  item: IBeerItem,
  handleOnCardClick: Function
}


export default function CartItem({ item, handleOnCardClick }: CartItemProps) {

  return (
    <IonCard color='light'
      className='ion-card'
      onClick={() => handleOnCardClick(item.id)}>
       <IonCardHeader>
            <IonCardTitle>
              {item.name}
            </IonCardTitle>
            <IonCardSubtitle>
          {item.abv}%
            </IonCardSubtitle>

          </IonCardHeader>
          <IonCardContent>
        <img className='card-image' alt={item.name} src={item.image_url} />
      </IonCardContent>
      
        </IonCard>
  );
}
