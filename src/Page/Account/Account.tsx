import { FC } from "react";
import { Layout } from "@Components/index";
import { FormAccount } from "@Components/index";

const Account: FC = () => {
  return (
    <Layout account showHome>
      <section>
        <FormAccount />
      </section>
    </Layout>
  );
};
export default Account;
