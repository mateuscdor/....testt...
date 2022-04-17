import { IBotData } from "../interfaces/IBotData";
import path from "path";

export default async (botData: IBotData) => {

    const { reply, sendSticker, args} = botData

    if (!args || !["1", "2", "3", "4", "5", "6"].includes(args.trim())) return reply("Ex: ?dado 1")

    let b = [

        "1", "2", "3", "4", "5", "6"
    ]

    let ale = b[Math.floor(Math.random() * b.length)]

    reply(`O dado caiu em...`)

    let dad = path.resolve(__dirname, "..", "..", "assets", "dados", `${ale}.webp`)

    await sendSticker(dad)

    let slaa = dad.split(".webp")[0]

    let o = ""

    if (args === ale) {

        o = "Vc até que é bom de palpite hein"

    } else {

        o = "Vc não é tão bom de palpite kkkkk"
    }

    await reply(`${o}`)
};
