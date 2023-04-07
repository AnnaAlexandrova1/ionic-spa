import React from "react";

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react'
import { IBeerItem } from "../../service/interfaces/interfaces";
import './cardItem.css'

interface CartItemProps {
    item: IBeerItem
}


export default function CartItem({ item }: CartItemProps) {

  return (
    <IonCard color='light'
      className='ion-card'
      onClick={() => {}}>
       <IonCardHeader>
            <IonCardTitle>
              {item.name}
            </IonCardTitle>
            <IonCardSubtitle>
          {item.abv}%
            </IonCardSubtitle>

          </IonCardHeader>
          <IonCardContent>
            <img className='card-image'  alt="Silhouette of mountains" src={item.image_url} />
          </IonCardContent>
        </IonCard>
  );
}
