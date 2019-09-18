// import generateColor from 'string-to-color'

const getHashCode = (str: string) => {
  let hash = 0
  if (str.length === 0) {
    return hash
  }
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}

const intToHSL = (num: number) => {
  const shortened = num % 360
  return 'hsl(' + shortened + ',100%,40%)'
}

export default (text: string) => {
  const colorMap = {
    'Add custom entry': '#EAEBEB',
    'Playstation 4': '#FF7600',
    'Xone': '#21FAB2'
  }


  return colorMap[text] || intToHSL(getHashCode(text))
  // return generateColor(text + '  ')
}
