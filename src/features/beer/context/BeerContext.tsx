import { Api } from "@services/axios/AxiosInstance";
import { createContext, useContext, useEffect, useState } from "react";
import { Beer } from "../data/types";
import { fetchPaginatedBeers } from "../services/beerFetches";

const BeerContext = createContext<BeerContextInterface | null>(null);

export default function BeerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  async function refresh() {
    setLoading(true);
    const data = (await fetchPaginatedBeers(1)).data;
    try {
      if (data.length > 0) {
        setPage(2);
        setBeerList(data);
      }
    } catch (e) {
      alert("Some error happened");
    }
    setLoading(false);
  }
  async function fetchData() {
    try {
      const data = (await fetchPaginatedBeers(page)).data;
      if (data.length > 0) {
        setPage((prev) => prev + 1);
        setBeerList((prev) => [...prev, ...data]);
      }
    } catch (e) {
      alert("Some error happened");
    }
  }
  useEffect(() => {
    refresh();
  }, []);
  return (
    <BeerContext.Provider value={{ beerList, refresh, fetchData, loading }}>
      {children}
    </BeerContext.Provider>
  );
}
export const useBeerContext = () => useContext(BeerContext);
interface BeerContextInterface {
  beerList: Beer[];
  refresh(): Promise<void>;
  fetchData(): Promise<void>;
  loading: boolean;
}
