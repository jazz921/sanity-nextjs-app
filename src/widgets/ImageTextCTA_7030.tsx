import React from 'react'

const ImageTextCTA_7030 = ({mainTitle, mainImage}: any) => {
  return (
    <div>
      <img 
        src={mainImage.asset.url}
        alt={mainImage.Alt}
      />
      <h1>{mainTitle}</h1>
    </div>
  )
}

export default ImageTextCTA_7030
