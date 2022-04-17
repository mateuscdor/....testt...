import { IBotData } from "../interfaces/IBotData";
import path from "path";

export default async (botData: IBotData) => {

    const { reply , sendAudio,args, replyJid, socket, userJid, remoteJid, sendText} = botData

    let ratee = ["Tac... Não disparou","Tac... Não disparou, ainda...","Tac💥 Disparou e você será banido","Tac... A arma estava descarregada"]
    const cu = ratee[Math.floor(Math.random() * ratee.length)]

    let b = ""

    if (cu === ratee[0]) b = path.resolve(__dirname, "..", "..", "assets", "roleta", "1a.m4a")
    if (cu === ratee[1]) b = path.resolve(__dirname, "..", "..", "assets", "roleta", "1a.m4a")
    if (cu === ratee[3]) b = path.resolve(__dirname, "..", "..", "assets", "roleta", "2b.m4a")
    if (cu === ratee[2]) b = path.resolve(__dirname, "..", "..", "assets", "roleta", "3c.m4a")

   await sendAudio(b)

   await reply(cu)

};
