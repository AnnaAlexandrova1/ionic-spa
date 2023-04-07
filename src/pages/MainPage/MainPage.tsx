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
import { IBeerList, ISelected, IStatus } from "../../service/interfaces/interfaces";
import CartItem from "../../components/CardItem/CardItem";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Pagination from "../../components/Pagination/Pagination";

export default function MainPage() {
  const [selected, setSelected] = useState<ISelected>({page: 1, id: ''});
  const [beerList, setBeerList] = useState<any | []>([]);
  const [status, setStatus] = useState<IStatus>({loading: true, error: false});
  
  const navigate = useNavigate()

  const getBeer = () => {
    getBeerList(selected.page)
      .then((res) => {
        setBeerList(res);
        setStatus({...status, loading: false});
      })
      .catch((err) => {
        setStatus({...status, error: true});;
      });
  };

  useEffect(() => {
    getBeer();
  }, []);

   useEffect(() => {
    getBeer();
  }, [selected.page]);

  if (status.loading) {
    return <Loading />;
  }

  if (status.error) {
    return <Error />;
  }

  const handleOnPageClick = (elem: number) => {
    setSelected({...selected, page:elem});
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
        <Pagination page={selected.page} handleOnPageClick={handleOnPageClick} />
      </IonContent>
    </IonPage>
  );
}
