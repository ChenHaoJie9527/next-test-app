"use client";

import {useState } from "react";
import "./styles.css";

export default function Page() {
  const [show, setShow] = useState(true);

  return (
    <div className="screen-root">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
