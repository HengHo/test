"use client";
import Image from "next/image";
import React, { useState } from "react";

// ************************************************************************************************* 4
export const Test4 = () => {
  return (
    <>
      <span>SELECT * FROM Customer WHERE Used {">"} 500000;</span>
    </>
  );
};

// ************************************************************************************************* 5
export const Test5 = () => {
  return (
    <>
      <span>
        SELECT Customer.ID, Customer.Name, Order.ID AS OrderID, Order.Amount
        FROM Customer JOIN Order ON Customer.ID = Order.CustomerID;
      </span>
    </>
  );
};
// ************************************************************************************************* 5
export const Test6 = () => {
    return (
      <>
        <Image src="/images/erd.png" alt="" />
      </>
    );
  };
// ************************************************************************************************* 7
function Calculate(x: number): number {
  for (let i = 0; i < 7; i++) {
    x -= x / 3;
  }
  return x;
}
export const Test7 = () => {
  const result = Calculate(5832);

  return (
    <>
      <span>{result}</span>
    </>
  );
};

// ************************************************************************************************* 8
function generateReverseTriangle(inputNumber: number): string {
  let stars = "";

  for (let i = inputNumber; i >= 1; i--) {
    for (let j = 0; j < inputNumber - i; j++) {
      stars += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      stars += "*";
    }
    stars += "\n";
  }

  return stars;
}

export const Test8 = () => {
  const [inputNumber, setInputNumber] = useState<number>(0);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber(Number(event.target.value));
  };
  const ReverseTriangle = generateReverseTriangle(inputNumber);
  return (
    <>
      <div>
        <div className="relative flex flex-row w-full gap-2 whitespace-nowrap">
        <span>กรอกจำนวนแถว</span>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          value={inputNumber}
          onChange={handleInputChange}
        />
        </div>
        <h2 >ผลลัพธ์</h2>

        <pre>{ReverseTriangle}</pre>
      </div>
    </>
  );
};

// ************************************************************************************************* 10
function probability(successWays: number, totalWays: number) {
  return successWays / totalWays;
}


export const Test10 = () => {
  const orange = 6,
    mangosteen = 3,
    mango = 1;
  const totalFruits = orange + mangosteen + mango;

  const totalWays =
    (totalFruits * (totalFruits - 1) * (totalFruits - 2)) / (3 * 2 * 1);
  const successWays = orange * mangosteen * mango;
  return (
    <div>
      <pre>
        ความน่าจะเป็นคือ
        {probability(successWays, totalWays) * 100}%
      </pre>
    </div>
  );
};

// ************************************************************************************************* 11
export const Test11 = () => {
  let i;
  let x: string = "8";
  for (i = 8; i < 1000; i += 8) {
    x += "+8";
  }
  return (
    <>
      <label className="break-all">
        {x}={i}
      </label>
    </>
  );
};

// ************************************************************************************************* 12
export const Test12 = () => {
  const totalCases = 6 * 6;
  const sum10Cases = 3;
  const diff2Cases = 8;
  return (
    <>

      <div>
        <pre>
          ความน่าจะเป็นของผลรวมเป็น 10:
          {probability(sum10Cases, totalCases) * 100}%
        </pre>
        <pre>
          ความน่าจะเป็นของผลต่างเป็น 2:
          {probability(diff2Cases, totalCases) * 100}%
        </pre>
      </div>
    </>
  );
};
