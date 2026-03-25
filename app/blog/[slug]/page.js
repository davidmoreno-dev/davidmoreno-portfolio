import BlogArticlePage from "@/components/blog/BlogArticlePage";
import { getBlogParamsByLanguages } from "@/utility/blog";

export const generateStaticParams = () =>
  getBlogParamsByLanguages(["es", "ca", "en"]);

const page = async ({ params }) => {
  const { slug } = await params;

  return <BlogArticlePage slug={slug} allowedLanguages={["es", "ca", "en"]} />;
};

export default page;
