import { IBotData } from "../interfaces/IBotData";

export default async (botData: IBotData) => { 

    const { reply, args } = botData

    if (!args) return reply("Me faça uma pergunta")

    let a = ["Sim..?", "Não", "Não..?", "Talvez..", "Claro", "Sla krai kkkk", "kkkkk vsfd", "Gayzo vc ne? kkkk","isso ne ideia n boy kkk", "N curto gente afeminada n migaaa" , "Ve c eu to na esquina fdpkkkk"] 

    let b = a[Math.floor(Math.random() * a.length)]

    reply(b)
};
