import { Suspense, useEffect, useState } from "react";
import Head from "next/head";
import { Title } from "../components/Ui";
import StoresList from "../components/StoresList";
import Spinner from "../components/Spinner";

export default function Index() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => console.log("by @cristianbgp 🤓"), []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition(pos.coords);
    });
  }, [setPosition]);

  const styleContainer = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#000000",
    backgroundColor: "#fde43b",
    transition: "background-color 0.5s ease",
  };

  if (position.latitude === 0)
    return (
      <div
        style={{
          ...styleContainer,
          justifyContent: "center",
          backgroundColor: "#ffffff",
          color: "#000000",
          height: "100vh",
        }}
      >
        <p style={{ fontSize: "0.8em" }}>Please allow location access</p>
      </div>
    );

  return (
    <div style={styleContainer}>
      <Head>
        <title>Tambo+ cerca</title>
      </Head>
      <Title styles={{ marginTop: "0.7em", color: "#A74A93" }}>Tambo+</Title>
      <Title>cerca</Title>
      <Suspense
        fallback={
          <div style={{ margin: "1em" }}>
            <Spinner />
          </div>
        }
      >
        <StoresList currentLocation={[position.latitude, position.longitude]} />
      </Suspense>
    </div>
  );
}
