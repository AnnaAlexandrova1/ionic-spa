import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBeerList } from "../../service/api/requests";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/react";
import { IBeerList } from "../../service/interfaces/interfaces";
import CartItem from "../../components/CardItem/CardItem";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Pagination from "../../components/Pagination/Pagination";

export default function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [beerList, setBeerList] = useState<any | []>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  

  const navigate = useNavigate()

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

   useEffect(() => {
    getBeer();
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleOnPageClick = (elem: number) => {
    setPage(elem);
  };

  const handleOnCardClick = (elem: number) => {
      navigate(`/itemPage`)
  }

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {beerList.map((item) => {
            return (
              <IonItem key={item.id}>
                <CartItem item={item} />
              </IonItem>
            );
          })}
        </IonList>
        <Pagination page={page} handleOnPageClick={handleOnPageClick} />
      </IonContent>
    </IonPage>
  );
}
