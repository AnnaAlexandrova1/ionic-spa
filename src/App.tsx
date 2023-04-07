import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router";

import { IonApp, IonHeader, IonContent } from "@ionic/react";
import { setupIonicReact } from "@ionic/react";

import { getBeerList } from './service/api/requests'
import { ISelected, IStatus, IBeerItem, IBeerList } from "./service/interfaces/interfaces";
import MainPage from "./pages/MainPage/MainPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import Logo from "./components/Logo/Logo";

import "@ionic/react/css/core.css";
import "./App.css";

setupIonicReact();


function App() {
  const [selected, setSelected] = useState<ISelected>({ page: 1, id: "", beerItem: '' });
  const [beerList, setBeerList] = useState<IBeerList | []>([]);
  const [status, setStatus] = useState<IStatus>({ loading: true, error: false, });

  const navigate = useNavigate()

  const getBeer = () => {
    getBeerList(selected.page)
      .then((res) => {
        setBeerList(res);
        setStatus({ ...status, loading: false });
      })
      .catch((err) => {
        setStatus({ ...status, error: true });
      });
  };

  useEffect(() => {
    getBeer();
  }, []);

  useEffect(() => {
    getBeer();
  }, [selected.page]);

  const handleOnPageClick = (elem: number) => {
    setSelected({ ...selected, page: elem });
  };
  
  const handleOnCardClick = (num: number) => {
    const e:IBeerItem = beerList.filter((item) => item.id === num)[0]
    setSelected({ ...selected, id: num, beerItem: e });
    navigate(`/itemPage`);
  };

  return (
    <IonApp>
      <IonHeader>
        <div className="header-container">
          <Logo />
        </div>
      </IonHeader>

      <IonContent>
        <Routes>
          <Route path="/" index element={<MainPage selected={selected} beerList={beerList} status={status}
            handleOnPageClick={handleOnPageClick} handleOnCardClick={handleOnCardClick} />} />
          <Route path="itemPage" element={<ItemPage beerItem={selected.beerItem} />} />
        </Routes>
      </IonContent>
    </IonApp>
  );
}

export default App;
