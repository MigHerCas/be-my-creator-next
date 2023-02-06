import Layout from "@layout/Layout";
import type { PlainPageProps } from "@views/PlainPage/PlainPageView";
import PlainPageView from "@views/PlainPage/PlainPageView";
import type { ReactElement } from "react";

const content: PlainPageProps = {
  title: "Terms and conditions",
  subtitle: "Terms and conditions",
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
    {
      type: "paragraph",
      content:
        "Además, Reduncle no se hace cargo sobre la idoneidad, disponibilidad, fiabilidad, puntualidad y exactitud de la información contenida en este site para ningún propósito. La información contenida en este site se proporciona tal cual y sin garantía de cualquier tipo. Reduncle desconoce todas las garantías y condiciones relacionadas con este site, incluyendo todas las garantías o condiciones implicadas o comerciabilidad, la idoneidad para un propósito específico, título y no violación.",
    },
    {
      type: "paragraph",
      content:
        "El presente contrato se rige por la Ley Española y para la resolución de cualquier conflicto o divergencia que pudiera surgir en relación con el presente contrato, las partes se comprometen a realizar sus mejores esfuerzos para alcanzar una solución amistosa.",
    },
    { type: "heading", content: "Régimen Jurídico" },
    {
      type: "paragraph",
      content:
        "El presente contrato se rige por la Ley Española y para la resolución de cualquier conflicto o divergencia que pudiera surgir en relación con el presente contrato, las partes se comprometen a realizar sus mejores esfuerzos para alcanzar una solución amistosa.",
    },
    {
      type: "paragraph",
      content:
        "Ante cualquier controversia derivada del presente contrato, las partes renuncian expresamente al foro que les fuere propio en beneficio de los Juzgados y Tribunales de la plaza de Madrid.",
    },
  ],
};

const View = () => <PlainPageView {...content} />;

View.getLayout = function getLayout(page: ReactElement) {
  return <Layout hideBlobs>{page}</Layout>;
};

export default View;
