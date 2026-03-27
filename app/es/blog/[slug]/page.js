import BlogArticlePage from "@/components/blog/BlogArticlePage";
import { getBlogParamsByLanguages, getBlogPostBySlug } from "@/utility/blog";
import { buildBlogMetadata } from "@/utility/seo";

export const generateStaticParams = () => getBlogParamsByLanguages(["es"]);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || post.language !== "es") {
    return {};
  }

  return buildBlogMetadata({
    postId: post.id,
    language: "es",
    title: `${post.title} | David Moreno`,
    description: post.excerpt,
  });
}

const page = async ({ params }) => {
  const { slug } = await params;

  return <BlogArticlePage slug={slug} allowedLanguages={["es"]} />;
};

export default page;
