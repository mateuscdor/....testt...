import fetch from "node-fetch"

(async () => {

    const responsee = await fetch(`https://brizas-api.herokuapp.com/sociais/v2/ytplaymp3?apikey=brizaloka&query=brocasito%20dope`)

    const data = await responsee.json()

    console.log(data.link_src)

    const r = await fetch(data.link_src)

    const a = await r.buffer()

    console.log(a)

})()