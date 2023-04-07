import React from "react";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/react";
import { ISelected, IStatus } from "../../service/interfaces/interfaces";
import CartItem from "../../components/CardItem/CardItem";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Pagination from "../../components/Pagination/Pagination";

interface MainPageProps {
  selected: ISelected,
  beerList: any | [],
  status: IStatus, 
  handleOnPageClick: Function, 
  handleOnCardClick: Function
}


export default function MainPage({ selected, beerList, status, handleOnPageClick, handleOnCardClick }: MainPageProps) {

  if (status.loading) {
    return <Loading />;
  }

  if (status.error) {
    return <Error />;
  }


  return (
    <IonPage>
      <IonContent>
        <IonList>
          {beerList.map((item) => {
            return (
              <IonItem key={item.id}>
                <CartItem item={item} handleOnCardClick={handleOnCardClick} />
              </IonItem>
            );
          })}
        </IonList>
        <Pagination page={selected.page} handleOnPageClick={handleOnPageClick} />
      </IonContent>
    </IonPage>
  );
}
