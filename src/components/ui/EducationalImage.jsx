import { resolveAsset } from '../../data/assets'

export function EducationalImage({
  asset,
  alt,
  caption = '',
  aspectRatio,
  objectPosition = 'center',
  className = '',
  loading = 'lazy',
  decorative = false,
}) {
  const source = resolveAsset(asset)
  const imageStyle = {
    ...(aspectRatio ? { aspectRatio } : {}),
    ...(objectPosition ? { objectPosition } : {}),
  }

  if (!source) {
    const placeholder = (
      <div className={`educational-image educational-image-placeholder ${className}`} role="img" aria-label={alt}>
        <span className="educational-image-line" aria-hidden="true"></span>
        <span>Illustration coming soon</span>
      </div>
    )
    return caption ? <figure className="educational-figure">{placeholder}<figcaption>{caption}</figcaption></figure> : placeholder
  }

  const image = <img className={`educational-image ${className}`} src={source} alt={decorative ? '' : alt} loading={loading} style={imageStyle} />
  return caption ? <figure className="educational-figure">{image}<figcaption>{caption}</figcaption></figure> : image
}
