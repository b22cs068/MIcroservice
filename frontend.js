import React, { useState } from "react";

const App = () => {
  const [orderResponse, setOrderResponse] = useState("");
  const [gatewayResponse, setGatewayResponse] = useState("");

  const callOrderService = async () => {
    try {
      const response = await fetch("http://<VM1_IP>:<PORT>/order");
      const data = await response.json();
      setOrderResponse(JSON.stringify(data));
    } catch (error) {
      setOrderResponse("Error calling Order Service");
    }
  };

  const callGatewayService = async () => {
    try {
      const response = await fetch("http://<VM3_IP>:<PORT>/gateway");
      const data = await response.json();
      setGatewayResponse(JSON.stringify(data));
    } catch (error) {
      setGatewayResponse("Error calling Gateway Service");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Microservice Frontend</h1>
      <button onClick={callOrderService}>Call Order Service</button>
      <p>{orderResponse}</p>
      <button onClick={callGatewayService}>Call Gateway Service</button>
      <p>{gatewayResponse}</p>
    </div>
  );
};

export default App;
