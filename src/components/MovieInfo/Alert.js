import React, { useEffect } from "react";
import { Para } from "./Alert.styles";

const Alert = ({ msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return <Para>{msg}</Para>;
};

export default Alert;
