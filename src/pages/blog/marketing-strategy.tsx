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
        "El copyright de todos los materiales de este site, incluyendo también, sin limitación, el texto y los gráficos, es propiedad de Reduncle. Se pueden imprimir copias de cualquier parte de este site para su uso personal y nunca comercial. No obstante a lo anterior, no se puede, sin el consentimiento escrito explícito de Reduncle: (i) distribuir, modificar o reproducir cualquier parte de este site (incluyendo texto y gráficos), o (ii) “reflejar” cualquier parte de este sitio (incluyendo texto y gráficos) en cualquier otro servidor.    ",
    },
    {
      type: "paragraph",
      content:
        "La información y los links contenidos en este site son proporcionados por Reduncle con la intención de aportar información general. Este site puede incluir links a sites de terceros sobre los que no tiene el control Reduncle. Por ello, Reduncle no se hace cargo en cuanto a la exactitud o de ningún otro aspecto de la información contenida en dichos sites de terceros.",
    },
  ],
};

const View = () => <BlogView {...content} />;

View.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default View;
