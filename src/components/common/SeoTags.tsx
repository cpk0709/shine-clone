export const SeoTags = (
  <>
    <meta
      key="viewport"
      name="viewport"
      content="initial-scale=1.0, width=device-width"
    />
    <meta key="charset" charSet="UTF-8" />
    <title>{process.env.NEXT_PUBLIC_SEO_TITLE}</title>
    <meta
      name="description"
      content={process.env.NEXT_PUBLIC_SEO_DESCRIPTION}
    />
    <link rel="shortcut icon" href={process.env.NEXT_PUBLIC_SEO_FAVICON} />
    <link rel="canonical" href={process.env.NEXT_PUBLIC_SEO_CANONICAL} />
    <meta
      key="og-url"
      property="og:url"
      content={process.env.NEXT_PUBLIC_SEO_OG_URL}
    />
    <meta
      key="og-title"
      property="og:title"
      content={process.env.NEXT_PUBLIC_SEO_OG_TITLE}
    />
    <meta
      key="og-description"
      property="og:description"
      content={process.env.NEXT_PUBLIC_SEO_OG_DESCRIPTION}
    />
    <meta
      key="og-image"
      property="og:image"
      content={`${process.env.NEXT_PUBLIC_SEO_OG_URL}${process.env.NEXT_PUBLIC_SEO_OG_IMAGE_PATH}`}
    />
    <meta name="twitter:image" content={process.env.NEXT_PUBLIC_SEO_OG_IMAGE} />
    <meta
      property="og:image:width"
      content={process.env.NEXT_PUBLIC_SEO_OG_WIDTH}
    />
    <meta
      property="og:image:height"
      content={process.env.NEXT_PUBLIC_SEO_OG_HEIGHT}
    />
    <meta name="twitter:site" content={process.env.NEXT_PUBLIC_SEO_OG_URL} />
    <meta name="twitter:card" content={process.env.NEXT_PUBLIC_SEO_OG_CARD} />
  </>
);
