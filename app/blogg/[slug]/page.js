import BlogArticlePage from "@/components/blog/BlogArticlePage";
import { getBlogParamsByLanguages } from "@/utility/blog";

export const generateStaticParams = () => getBlogParamsByLanguages(["sv"]);

const page = async ({ params }) => {
  const { slug } = await params;

  return <BlogArticlePage slug={slug} allowedLanguages={["sv"]} />;
};

export default page;
