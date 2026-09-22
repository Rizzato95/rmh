interface PageSeoOptions {
  title: string
  description: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

/** Sets the editorial metadata for a page; @nuxtjs/seo resolves site-wide URLs and canonical tags. */
export const usePageSeo = (options: PageSeoOptions) => {
  const fullTitle = `${options.title} | RMH Run Club`
  const image = options.image || '/images/running.webp'
  const imageAlt = options.imageAlt || 'RMH Run Club, Restera Mad Horses a Treviso'

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: fullTitle,
    ogDescription: options.description,
    ogType: options.type || 'website',
    ogImage: image,
    ogImageAlt: imageAlt,
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: options.description,
    twitterImage: image,
    twitterImageAlt: imageAlt,
  })
}
