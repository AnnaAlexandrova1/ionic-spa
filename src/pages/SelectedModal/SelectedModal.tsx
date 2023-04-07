import React, { useState } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from "@ionic/react";
import { useStorage } from "../../hooks/useStorage";
import ModalCart from "../../components/ModalCard/ModalCard";

interface SelectedModalParams {
  isOpen: boolean;
  setIsOpen: Function;
}

export default function SelectedModal({
  isOpen,
  setIsOpen,
}: SelectedModalParams) {
  const { selected, addSelected, removeSelected } = useStorage();
  console.log(selected);

  const deleteBeer = async (id: number) => {
    await removeSelected(id);
  };

  const showZeroSelected = () => {
    if (selected.length === 0) {
      return <div style={{ margin: '20px', textAlign: 'center' }}>В избранном пока пусто</div>;
    } else {
      return null;
    }
  };

  return (
    <IonPage>
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Избранное</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Закрыть</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {showZeroSelected()}
          {selected.map((item) => {
            return (
              <ModalCart
                key={item.id}
                img={item.image_url}
                name={item.name}
                id={item.id}
                deleteBeer={deleteBeer}
              />
            );
          })}
        </IonContent>
      </IonModal>
    </IonPage>
  );
}
