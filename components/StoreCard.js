import Link from "next/link";
import { Text, Card, Line, MapPin } from "./Ui";

function StoreCard({ store }) {
  return (
    <Card styles={{ margin: "0.7em", width: "initial" }}>
      <Text styles={{ fontWeight: "bold" }}>{store.name}</Text>
      <Line />
      <Text>
        {store.distance < 1000
          ? `${parseInt(store.distance)}m`
          : `${(store.distance / 1000).toFixed(2)}km`}
      </Text>
      <Text>{store.address}</Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={store.gmapLink}>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin
              width="67px"
              height="67px"
              style={{
                transition: "color 0.2s ease",
                "&:hover": { color: "#A74A93" },
              }}
            />
          </a>
        </Link>
      </div>
    </Card>
  );
}

export default StoreCard;
