/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Be My Creator",
  titleTemplate: "%s | UGC",
  defaultTitle: "nextarter-chakra",
  description: "Your UGC agency",
  canonical: "https://bemycreator.com",
  openGraph: {
    url: "https://bemycreator.com",
    title: "Be My Creator | UGC ",
    description: "Your UGC agency for brands and creators",
    images: [
      {
        url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/images/open-graph.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC9pbWFnZXMvb3Blbi1ncmFwaC5wbmciLCJpYXQiOjE2NzQ5ODQ5ODEsImV4cCI6MTcwNjUyMDk4MX0.oJdlcmnxC92YHmhfkQfaIm_YqclXU6TKtJKQyhmcjGE&t=2023-01-29T09%3A36%3A21.871Z",
        alt: "bemycreator.com og-image",
      },
    ],
    site_name: "BeMyCreator",
  },
  twitter: {
    handle: "@bemycreator",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
