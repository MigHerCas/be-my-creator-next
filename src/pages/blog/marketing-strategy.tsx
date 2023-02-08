import Layout from "@layout/Layout";
import type { BlogPageProps } from "@views/blog/BlogView";
import BlogView from "@views/blog/BlogView";
import type { ReactElement } from "react";

const content: BlogPageProps = {
  title:
    "User-Generated Content | Why Does Your Brand Need an UGC Marketing Strategy?",
  subtitle: "Subtitle missing here",
  author: "Author missing here",
  date: "07-02-2023",
  footerText: "Footer text missing here",
  imgSrc:
    "https://images.unsplash.com/photo-1627777941175-d31f471f3d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  imgCaption: "Bibi Pace | Splash",
  body: [
    {
      type: "paragraph",
      content:
        "User-generated content (UGC) is one of the most effective marketing strategies that a brand can use in today's digital age. With the rapid growth of social media, consumers are exposed to countless marketing messages every day. In this overstated market, it can be challenging to stand out and build trust with your target audience. That's where UGC comes in.",
    },
    {
      type: "heading",
      content: "What is UGC?",
    },
    {
      type: "paragraph",
      content:
        "UGC refers to any content created by customers, fans, or followers of a brand, such as photos, videos, reviews, and testimonials. This type of content is valuable because it is real, authentic, and created by people who have first-hand experience with a brand.",
    },
    {
      type: "paragraph",
      content:
        "Why does your brand need an UGC marketing strategy? Here are five key reasons:",
    },
    {
      type: "heading",
      content: "Increases Social Proof",
    },
    {
      type: "paragraph",
      content:
        "One of the most significant benefits of UGC is that it increases social proof. When consumers see other people using and enjoying a product or service, they are more likely to trust the brand and make a purchase. This is because people are more likely to trust the opinions of others than the opinions of a brand. UGC provides a sense of social proof that can influence buying decisions, making it an effective way to increase conversions. In Be My Creator you can count with creators who allow us to run ads through their accounts, so once we have that social proof, we boost that content with Tik Tok Ads (Spark Ads) or Short Ads.",
    },
    {
      type: "paragraph",
      content:
        "Calvin Klein created a dedicated landing page specifically for user-generated content. This approach allows customers to see real-life examples of how other consumers are styling their Calvins. By displaying genuine endorsements from customers, the brand offers a more relatable representation of their products, as opposed to featuring overly styled models.",
    },
    {
      type: "heading",
      content: "Boosts Authenticity",
    },
    {
      type: "paragraph",
      content:
        "UGC is real and authentic, and that's what makes it so powerful. Consumers can see that your brand is not just about selling products, but also about creating a community. When people share their experiences with a brand, they are showing their support and loyalty. This level of authenticity can help build trust with potential customers, making them more likely to become loyal customers themselves. User-generated content is incredibly influential in the final stages of the buyer’s journey",
    },
    {
      type: "heading",
      content: "Enhances Engagement",
    },
    {
      type: "paragraph",
      content:
        "UGC can drive engagement by encouraging customers to interact with your brand. This can be in the form of comments, shares, and likes, which can all increase brand exposure. Engagement is a crucial metric in the digital world, and UGC can help increase it. By creating a platform for customers to share their experiences, brands can create a two-way conversation with their audience, which can help build stronger relationships and increase customer loyalty.",
    },
    {
      type: "heading",
      content: "Improved SEO",
    },
    {
      type: "paragraph",
      content:
        "UGC can also help improve your search engine optimization (SEO) by providing valuable content for search engines to index. This can help increase your visibility in search results and drive more traffic to your website. Search engines favor websites that have fresh, relevant, and valuable content, and UGC can help provide that. By leveraging the power of UGC, brands can improve their SEO and increase their online visibility, which can lead to more traffic and sales.",
    },
    {
      type: "paragraph",
      content:
        "In conclusion, an UGC marketing strategy can benefit your brand in numerous ways, from increasing social proof to enhancing engagement and improving SEO. By harnessing the power of UGC, you can build trust with your target audience, improve your brand image, and ultimately drive sales.",
    },
    {
      type: "paragraph",
      content:
        "However, it is important to remember that UGC is not a one-size-fits-all solution. Every brand is different, and every target audience is unique. It is crucial to understand your audience and what type of content they are likely to engage with and share.",
    },
    {
      type: "paragraph",
      content:
        "Once you have this information, you can create a UGC marketing strategy that is tailored to your brand and your audience.",
    },
    {
      type: "paragraph",
      content: "¡Contact Us for a Free Strategy Call for your brand!",
    },
  ],
};

const View = () => <BlogView {...content} />;

View.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default View;
