/* eslint-disable */
import { fetchAccessToken } from "hume";
import ClientComponent from "../voiceAssistant/components/ClientComponent";

export default async function Voice() {
  try {
    // Attempt to fetch the access token from the Hume API
    const accessToken = await fetchAccessToken({
      apiKey: String(process.env.HUME_API_KEY),
      secretKey: String(process.env.HUME_SECRET_KEY),
    });

    if (!accessToken) {
      console.error("No access token received.");
      throw new Error("Failed to fetch access token from Hume API.");
    }

    // Render the component with the fetched access token
    return (
      <div>
        <ClientComponent accessToken={accessToken} />
      </div>
    );
  } catch (error:any) {
    console.error("Error fetching access token:", error.message);
    return (
      <div>
        Error: Failed to fetch access token. Please check your API credentials.
      </div>
    );
  }
}
