
import { Layout as DashboardLayout } from "/src/layouts/index.js";

const Page = () => {
  const pageTitle = "Safe Links Filters";

  return (
    <div>
      <h1>{pageTitle}</h1>
      <p>This is a placeholder page for the safe links filters section.</p>
    </div>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;