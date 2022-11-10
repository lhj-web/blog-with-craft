import BLOG from '@/blog.config'

export interface NoteType {
  title: string
  path: string
  link: string
}

export async function getAllNotes() {
  const craftConfigSecret = BLOG.craftConfigShareUrl.slice(23)
  const craftConfigApiUrl = `https://www.craft.do/api/share/${craftConfigSecret}`
  const init = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }
  const configResponse = await fetch(craftConfigApiUrl, init)
  const responseJson = await configResponse.json()
  const pageBlocksLength = responseJson.blocks[0].blocks.length
  // console.log('craft.js Blocks Num: ', pageBlocksLength)

  const configJson: NoteType[] = []
  for (let i = 0; i < pageBlocksLength; i = i + 3) {
    const t = i + 1
    const p = i + 2
    const l = i + 3
    try {
      const noteTitle = responseJson.blocks[t].content
      const notePath = responseJson.blocks[p].content
      const craftLink = responseJson.blocks[l].content
      const tpl = `{"title":"${noteTitle}","path":"${notePath}","link":"${craftLink}"}`
      configJson.push(JSON.parse(tpl))
    }
    catch (error) {
      const tpl = '{"title":"NULL","path":"","link":""}'
      configJson.push(JSON.parse(tpl))
    }
  }
  return configJson
}
