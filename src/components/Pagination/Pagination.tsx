import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import "./pagination.css";

interface PaginationProps {
  page: number;
  handleOnPageClick: Function;
}

export default function Pagination({page, handleOnPageClick,}: PaginationProps) {
  // только 3 страницы как в задании
  // не делаю проверку на количество оставшихся в отдаче карточек по API, соответственно последней страницы не будет
   const pagesList = [1, 2, 3];
    
    const styledPage = (item: number) => {
        if (item === page) {
            return 'pagination-item checked'
        } else {
            return 'pagination-item'
        }
    }

  return (
    <IonGrid className="pagination-element">
      <IonRow class="ion-justify-content-around">
        {pagesList.map((item, num) => {
          return (
              <IonCol size="3" key={num}
                  className={styledPage(item)}
                  onClick={() => handleOnPageClick(item)}
              >
              {item}
            </IonCol>
          );
        })}
      </IonRow>
    </IonGrid>
  );
}
