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
        url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/images/video-capture-9275.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC9pbWFnZXMvdmlkZW8tY2FwdHVyZS05Mjc1LnBuZyIsImlhdCI6MTY3NDk4Mzc1MiwiZXhwIjoxNzA2NTE5NzUyfQ.9v6-eHALF8ilenK7N7OXOJmckPSxk-xcWQsV1S93Fs4&t=2023-01-29T09%3A15%3A52.980Z",
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
