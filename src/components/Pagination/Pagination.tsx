import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import "./pagination.css";

export default function Pagination() {
  // только 3 страницы как в задании
  // не делаю проверку на количество оставшихся в отдаче карточек по API, соответственно последней страницы не будет
  const pagesList = [1, 2, 3];

  return (
    <IonGrid className="pagination-element">
      <IonRow class="ion-justify-content-around">
        {pagesList.map((item, num) => {
          return (
            <IonCol size="3" key={num} className="pagination-item">
              {item}
            </IonCol>
          );
        })}
      </IonRow>
    </IonGrid>
  );
}
