import Layout from "@layout/Layout";
import type { NextPageWithLayout } from "@pages/_app";
import FormCompleted from "@views/new-project/modules/FormCompleted";
import type { ReactElement } from "react";

const SuccessView: NextPageWithLayout = () => {
  return <FormCompleted />;
};

SuccessView.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SuccessView;
