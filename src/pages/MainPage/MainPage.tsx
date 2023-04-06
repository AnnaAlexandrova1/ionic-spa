import React, { useEffect, useState } from "react";
import { getBeerList } from "../../service/api/requests";
import { IonPage } from "@ionic/react";
import { IBeerList } from "../../service/interfaces/interfaces";

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
    
     console.log(beerList)
    
  return <IonPage></IonPage>;
}
