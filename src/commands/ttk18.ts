import { IBotData } from "../interfaces/IBotData";
import axios from "axios"
import cheerio from "cheerio"
import fetch from "node-fetch"

export default async (botData: IBotData) => {

    const { reply, userJid, sendVideo} = botData



    function porno() {
        return new Promise((resolve, reject) => {
            axios.get('https://tikporntok.com/?random=1')
            .then((res) => {
                const $ = cheerio.load(res.data)
                const hasil = {}
                //@ts-ignore
                hasil.title = $('article > h1').text()
                                //@ts-ignore
                hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
                                //@ts-ignore

                hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
                               //@ts-ignore

                hasil.desc = $('article > div.intro').text()
                                //@ts-ignore

                hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
              
                              //@ts-ignore
  hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
                               //@ts-ignore

  hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
                  //@ts-ignore

                hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
                                //@ts-ignore

                hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
                                //@ts-ignore

                hasil.tags = $('article > div.post-tags').text()
                                //@ts-ignore

                hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
                resolve(hasil)
            })
        })
    }

let s = await porno()
//@ts-ignore
const responsee = await fetch(s.video)
  const dataa = await responsee.buffer()

  reply("So um instante..")

 await sendVideo(dataa)


};
