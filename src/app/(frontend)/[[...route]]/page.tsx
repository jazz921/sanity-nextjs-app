import { sanityFetch } from "@/sanity/lib/live";
import { GET_PAGE } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Layout from "@/layout/Layout";

type ParamsType = {
  params: { route: string[] };
};

const getPageData = async (slugName: string[]) => {
  const { data } = await sanityFetch({
    query: GET_PAGE,
    params: { slug: slugName.join("/") },
  });

  if (!data[0].pageContents?.[0]) {
    return null;
  }

  return data[0].pageContents?.[0];
};

const PageGenerator = async ({ params }: ParamsType) => {
  const { route } = await params;
  const pageName = !route ? ["/"] : route;
  const layout = await getPageData(pageName);

  if (!layout) notFound();

  return (
    <>
      {layout && <Layout data={layout} />}
      <div id="portal"></div>
    </>
  );
};

export default PageGenerator;
