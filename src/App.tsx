import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISelected, IStatus } from "./service/interfaces/interfaces";
import { getBeerList } from './service/api/requests'
import "@ionic/react/css/core.css";
import { Routes, Route } from "react-router";
import { setupIonicReact } from "@ionic/react";
import { IonApp, IonHeader, IonContent } from "@ionic/react";
import MainPage from "./pages/MainPage/MainPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import Logo from "./components/Logo/Logo";
import "./App.css";

setupIonicReact();

function App() {
  const [selected, setSelected] = useState<ISelected>({ page: 1, id: "" });
  const [beerList, setBeerList] = useState<any | []>([]);
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
    setSelected({ ...selected, id: num });
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
          <Route path="itemPage" element={<ItemPage />} />
        </Routes>
      </IonContent>
    </IonApp>
  );
}

export default App;
