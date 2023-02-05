import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import React from 'react';


function Football() {

  const shoot = (a) => {
    document.write(a);
  }

  return (
    <button onClick={(e) => shoot("Goal!")}>Take the shot!</button>
  );
}
export default Football;

git remote add origin https://github.com/AMAN-12346/ReactApp.git
