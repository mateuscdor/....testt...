import { IBotData } from "../interfaces/IBotData";
import fetch from "node-fetch"

export default async (botData: IBotData) => {

    const { reply } = botData

    reply("Verificando status...")

    const response = await fetch(`https://brizas-api.herokuapp.com/gerador/pessoa?apikey=brizaloka`)
    const data = await response.json()

    if (data.status !== 200) return reply("Hmm...Fora de ar sorry")

    let pse = data.resultado

    let ps = `
Identidade gerada

Nome: ${pse.nome}
Mãe: ${pse.mae}
Pai: ${pse.pai}
RG: ${pse.RG}
CPF: ${pse.CPF}
Telefone: ${pse.telefonde}
Nascimento: ${pse.nascimento}
Signo: ${pse.signo}
Altura: ${pse.altura}
Peso: ${pse.peso}
TipoSanguineo: ${pse.tipoSanguineo}`

let en = data.resultado.endereco

console.log(en)

let a = `
Endereço

Cep: ${en.cep}
Logradouro: ${en.logradouro}
Complemento: ${en.complemento}
Numero: ${en.numero}
Bairro: ${en.bairro}
Cidade: ${en.cidade}
Estado: ${en.estado}
Sigla: ${en.estadoSigla}`

await reply(ps)
await reply(a)


};
