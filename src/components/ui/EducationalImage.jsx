import { resolveAsset } from '../../data/assets'

export function EducationalImage({ asset, alt, className = '', loading = 'lazy' }) {
  const source = resolveAsset(asset)

  if (!source) {
    return (
      <div className={`educational-image educational-image-placeholder ${className}`} role="img" aria-label={alt}>
        <span className="educational-image-line" aria-hidden="true"></span>
        <span>Illustration coming soon</span>
      </div>
    )
  }

  return <img className={`educational-image ${className}`} src={source} alt={alt} loading={loading} />
}

