interface PageSeoOptions {
  title: string
  description: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

/** Sets the editorial metadata for a page; @nuxtjs/seo resolves site-wide URLs and canonical tags. */
export const usePageSeo = (options: PageSeoOptions) => {
  const image = options.image || '/images/running.webp'
  const imageAlt = options.imageAlt || 'RMH Run Club, Restera Mad Horses a Treviso'

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: options.type || 'website',
    ogImage: image,
    ogImageAlt: imageAlt,
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
    twitterImageAlt: imageAlt,
  })
}
