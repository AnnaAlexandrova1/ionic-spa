import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";
import { IBeerItem } from "../service/interfaces/interfaces";

const TODOS_KEY = 'my-todos'

export function useStorage() {
    const [store, setStore] = useState<Storage>()
    const [selected, setSelected] = useState<IBeerItem[]>([])

    useEffect(() => {
        const initStorage = async () => {
            const newStore = new Storage({
                name: 'beerStorageDB'
            });
            const store = await newStore.create()
            setStore(store)

            const storedTodos = await store.get(TODOS_KEY) || []
            setSelected(storedTodos)
        }
        initStorage()
    }, [])
  
    const addSelected = async (item: IBeerItem) => {
        if (selected.findIndex((elem) => elem.id === item.id) === -1) {
          selected.push(item)  
        } 
        setSelected(selected)  
       store?.set(TODOS_KEY, selected)
    }

    const removeSelected = async (id: number) => {
        const toUpdate = selected.filter(item => item.id !== id) 
        setSelected(toUpdate)
        return store?.set(TODOS_KEY, toUpdate)
    }

    return {
        selected, addSelected, removeSelected
    }
}