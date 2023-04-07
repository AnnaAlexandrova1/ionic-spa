import React from "react";
import { useNavigate } from "react-router";
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
import { star, arrowBack } from "ionicons/icons";
import "./itemPage.css";
import { useStorage } from "../../hooks/useStorage";

interface ItemPageProps {
  beerItem: IBeerItem | ''
}

export default function ItemPage({ beerItem }: ItemPageProps) {
  const { selected, addSelected, removeSelected } = useStorage();
  const navigate = useNavigate()

  const addBeer = async (item: IBeerItem) => {
    await addSelected(item);
  };


  if (beerItem === '') {
    return (<div>Что-то пошло не так</div>)
  }

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
        <IonButton onClick={() => addBeer(beerItem)} color='success' >
          Добавить в избранное
          <IonIcon slot="end" icon={star}></IonIcon>
        </IonButton>
      </div>
      <div className="itempage-button-block">
        <IonButton onClick={() => navigate(`/`)} color='medium'>
          Назад
          <IonIcon slot="start" icon={arrowBack}></IonIcon>
        </IonButton>
      </div>
    </IonCard>
  );
}
