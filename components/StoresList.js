import useSWR from "swr";
import fetcher from "../utils/fetcher";
import StoreCard from "./StoreCard";

function StoresList({ currentLocation }) {
  const {
    data: responseStores,
  } = useSWR(
    `nearest?currentLatitude=${currentLocation[0]}&currentLongitude=${currentLocation[1]}`,
    fetcher,
    { suspense: true }
  );

  return (
    <div style={{ maxWidth: "800px" }}>
      {responseStores.data.map((store) => {
        return <StoreCard key={store.id} store={store} />;
      })}
    </div>
  );
}

export default StoresList;
