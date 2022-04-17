import { IBotData } from "../interfaces/IBotData";
import path from "path";

export default async (botData: IBotData) => {

    const { sendSticker, reply, args } = botData

    if (!args || !["cara", "coroa"].includes(args.trim())) return reply("Ex: ?caracoroa cara")


    let cara = path.resolve(__dirname, "..", "..", "assets", "cara", "cara.webp")

    let coroa = path.resolve(__dirname, "..", "..", "assets", "cara", "coroa.webp")


    let a = [
        cara,
        coroa
    ]

    let all = a[Math.floor(Math.random() * a.length)]   

    let sla = all.split('\\assets\\cara\\')[1]

    let slaa = sla.split(".webp")[0]

    let o = ""

    if (args === "cara") {

        o = "coroa"

    } else {

        o = "cara"
    }

    reply(`Hmm... Eu escolho ${o}`)

    await sendSticker(
             all
      ); 

      if (args !== slaa) {
          reply("Eu ganheiii!!!")
      } else {
          reply("Affs vc ganhou")
      }



};
