import { useCatImage } from '../hooks/useCatImage.js'

export function Image () {
  const { imageUrl } = useCatImage({ fact: 'cat' })

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
