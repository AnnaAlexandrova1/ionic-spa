import React, { useEffect, useState } from "react";
import { getBeerList } from "../../service/api/requests";
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonList, IonItem   } from "@ionic/react";
import { IBeerList } from "../../service/interfaces/interfaces";
import CartItem from "../../components/CardItem/CardItem";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [beerList, setBeerList] = useState<any | []>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);

    const getBeer = () => {
    getBeerList(page)
        .then((res) => {
        setBeerList(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };


  useEffect(() => {
    getBeer();
  }, []);

   if (loading) {
      return <Loading />
  }
  
    if (error) {
      return <Error />
    }
    
     console.log(beerList)
    
  return (<IonPage>
    <IonContent>
      <IonList>
        {beerList.map((item) => { 
          return  (<IonItem key={item.id}>
            <CartItem item = {item } />
          </IonItem>)
        })}
      </IonList>
 </IonContent>  
  </IonPage>);
}
