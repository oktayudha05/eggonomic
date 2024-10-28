import { NextRequest, NextResponse } from "next/server";
import mqtt from "mqtt";

const mqttServer = `${process.env.MQTT_SERVER}`;
const mqttOptions = {
  port: 1883,
  username: "eggonomic",
  password: `${process.env.MQTT_PASS}`,
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const state = searchParams.get("state");

  if (!state || (state !== "ON" && state !== "OFF")) {
    return NextResponse.json(
      { message: "Invalid state provided" },
      { status: 400 }
    );
  }

  try {
    const client = mqtt.connect(mqttServer, mqttOptions);

    return new Promise((resolve, reject) => {
      client.on("connect", () => {
        console.log("Connected to MQTT broker");

        client.publish("eggonomic/mesin", state, (err) => {
          if (err) {
            console.error("Failed to publish message:", err);
            reject(
              NextResponse.json(
                { message: "Error controlling LED" },
                { status: 500 }
              )
            );
          } else {
            console.log(`LED state set to ${state}`);
            resolve(NextResponse.json({ message: `LED is ${state}` }));
          }

          client.end();
        });
      });

      client.on("error", (error) => {
        console.error("MQTT Connection Error:", error);
        reject(
          NextResponse.json(
            { message: "MQTT connection error" },
            { status: 500 }
          )
        );
      });
    });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { message: "Unexpected error occurred" },
      { status: 500 }
    );
  }
}

