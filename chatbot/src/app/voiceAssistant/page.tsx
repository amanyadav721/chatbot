import ClientComponent from "../voiceAssistant/components/ClientComponent"
import { fetchAccessToken } from "hume"
export default async function Voice(){
    const accessToken = await fetchAccessToken({
        apiKey: String(process.env.HUME_API_KEY),
        secretKey: String(process.env.HUME_SECRET_KEY),
      });
      if (!accessToken) {
        throw new Error();
      }
    return <>
    <div>
    <ClientComponent accessToken={accessToken} />
    </div>
    </>
}