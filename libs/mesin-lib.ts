import { useState } from "react";

export const handleLEDControl = async (
  newState: string
): Promise<{ message: string; state: string }> => {
  try {
    const response = await fetch(
      `/api/espServer?state=${newState.toUpperCase()}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return {
      message: data.message || "LED state changed successfully",
      state: newState,
    };
  } catch (error) {
    console.error("Error controlling LED:", error);
    throw new Error("Error controlling LED: " + (error as Error).message);
  }
};

export const useLEDControl = () => {
  const [state, setState] = useState("off");
  const [message, setMessage] = useState("");

  const handleControl = async (newState: string) => {
    try {
      const result = await handleLEDControl(newState);
      setMessage(result.message);
      setState(result.state);
    } catch (error) {
      setMessage((error as Error).message);
    }
  };

  return { state, message, handleControl };
};
