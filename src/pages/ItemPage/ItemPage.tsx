import React from "react";
import { IBeerItem } from "../../service/interfaces/interfaces";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { star } from "ionicons/icons";
import "./itemPage.css";
import { useStorage } from "../../hooks/useStorage";

interface ItemPageProps {
  beerItem: IBeerItem;
}

export default function ItemPage({ beerItem }: ItemPageProps) {
   const { todos } = useStorage()

  return (
    <IonCard color="light" className="itempage-card">
      <IonCardHeader className="item-page-header">
        <IonCardTitle>{beerItem.name}</IonCardTitle>
        <IonCardSubtitle>Крепость: {beerItem.abv}%</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <img
          className="card-image item-page-image"
          alt={beerItem.name}
          src={beerItem.image_url}
        />

        <div className="card-content-container">
          <div className="card-content-item">
            Description:
            <p>{beerItem.description}</p>
          </div>
          <div className="card-content-item">
            Food Paring:
            {beerItem.food_pairing.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
          </div>
        </div>
      </IonCardContent>
      <div className="itempage-button-block">
        <IonButton>
          Добавить в избранное
          <IonIcon slot="end" icon={star}></IonIcon>
              </IonButton>
              
              {todos.map((todo, key) => (
                  <p>TEST</p>
              ))}
      </div>
    </IonCard>
  );
}
