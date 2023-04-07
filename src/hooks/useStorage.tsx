import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";
import { IBeerItem } from "../service/interfaces/interfaces";

const TODOS_KEY = 'my-todos'

export function useStorage() {
    const [store, setStore] = useState<Storage>()
    const [todos, setTodos] = useState<IBeerItem[]>([])

    useEffect(() => {
        const initStorage = async () => {
            const newStore = new Storage({
                name: 'beerStorageDB'
            });
            const store = await newStore.create()
            setStore(store)

            const storedTodos = await store.get(TODOS_KEY) || []
            setTodos(storedTodos)
        }
        initStorage()
    }, [])

    return {
        todos
    }
}