export const chunkArray = (myArray: any[], chunkSize: number) => {
  let index = 0
  var arrayLength = myArray.length
  const tempArray = []

  for (index = 0; index < arrayLength; index += chunkSize) {
    let myChunk = myArray.slice(index, index + chunkSize)
    tempArray.push(myChunk)
  }

  return tempArray
}

export const uid = () => {
  return (
    String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
    Math.random().toString(16).slice(2) +
    Date.now().toString(16).slice(4)
  )
}

type PictureCardsType = {
  [key: string]: number
}

export const getHighestCard = (a: string, b: string) => {
  const pictureCards: PictureCardsType = { A: 1, T: 10, J: 11, Q: 12, K: 13 }
  const x = pictureCards[a] || +a
  const y = pictureCards[b] || +b
  return x > y ? `${a}${b}` : `${b}${a}`
}
