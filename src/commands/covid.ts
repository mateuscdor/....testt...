import { IBotData } from "../interfaces/IBotData";
import fetch from "node-fetch"

export default async (botData: IBotData) => {

    const { reply, args } = botData

    if (!args) return reply("Ex: ?covid SP")
    let uf = args
    const response = await fetch(`https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/${uf}`)
    const data = await response.json()
    let res = `
Estado: ${data.state}
Uf: ${data.uf}
Casos: ${data.cases}
Mortes: ${data.deaths}
Suspeitos: ${data.suspects}`

reply(res)
};
