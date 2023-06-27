"use client";
import axios from "axios";
import React, { useState } from "react";

const sendData = async (
  projName: string,
  money: string,
  nameCoin: string,
  allocation: string,
  text: string
) => {
  const requestBody = {
    nameProject: projName,
    coinPrice: money,
    nameCoin: nameCoin,
    allocation: allocation,
    aboutProject: {
      textOne: text,
      textTwo: text
    }
  };

  try {
    const response = await axios.post(
      "http://localhost:4000/add-project",
      requestBody
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default function Create() {
  const [projName, setProjName] = useState("");
  const [text, setText] = useState("");
  const [money, setMoney] = useState("");
  const [nameCoin, setnameCoin] = useState("");
  const [allocation, setAllocation] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    sendData(projName, money, nameCoin, allocation, text);
  };

  return (
    <>
      <h1>Projects</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projName">name proj:</label>
          <input
            type="text"
            id="projName"
            value={projName}
            onChange={(e) => setProjName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="text">text:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="money">money</label>
          <input
            type="number"
            id="money"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="money">name coin</label>
          <input
            type="text"
            id="money"
            value={nameCoin}
            onChange={(e) => setnameCoin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="money">allocation</label>
          <input
            type="text"
            id="money"
            value={allocation}
            onChange={(e) => setAllocation(e.target.value)}
          />
        </div>
        <button type="submit">send</button>
      </form>
    </>
  );
}
