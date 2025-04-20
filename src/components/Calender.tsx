"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = ({
  value,
  onChange,
}: {
  value: Value;
  onChange: React.Dispatch<React.SetStateAction<Value>>;
}) => {
  return <Calendar onChange={onChange} value={value} />;
};

export default Calender;
