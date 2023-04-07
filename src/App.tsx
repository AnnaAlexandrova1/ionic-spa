import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router";

import { IonApp, IonHeader, IonContent, IonButton } from "@ionic/react";
import { star } from "ionicons/icons";
import { setupIonicReact } from "@ionic/react";

import { getBeerList } from "./service/api/requests";
import {
  ISelected,
  IStatus,
  IBeerItem,
  IBeerList,
} from "./service/interfaces/interfaces";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import SelectedModal from "./pages/SelectedModal/SelectedModal";
import Logo from "./components/Logo/Logo";

import "@ionic/react/css/core.css";
import "./App.css";

setupIonicReact();

function App() {
  const [selected, setSelected] = useState<ISelected>({
    page: 1,
    id: "",
    beerItem: "",
  });
  const [beerList, setBeerList] = useState<IBeerList | []>([]);
  const [status, setStatus] = useState<IStatus>({
    loading: true,
    error: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

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
    const e: IBeerItem = beerList.filter((item) => item.id === num)[0];
    setSelected({ ...selected, id: num, beerItem: e });
    navigate(`/main/itemPage`);
  };

  const showModal = () => {
    if (isOpen) {
      return <SelectedModal isOpen={isOpen} setIsOpen={setIsOpen} />;
    } else {
      return null;
    }
  };

  return (
    <IonApp>
      {showModal()}
      <Routes>
        <Route path="/main" element={<Layout setIsOpen={setIsOpen} />}>
          <Route
            index
            element={
              <MainPage
                selected={selected}
                beerList={beerList}
                status={status}
                handleOnPageClick={handleOnPageClick}
                handleOnCardClick={handleOnCardClick}
              />
            }
          />
          <Route
            path="/main/itemPage"
            element={<ItemPage beerItem={selected.beerItem} />}
          />
        </Route>
      </Routes>
    </IonApp>
  );
}

export default App;
