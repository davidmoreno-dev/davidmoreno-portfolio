import BlogArticlePage from "@/components/blog/BlogArticlePage";
import { getBlogParamsByLanguages, getBlogPostBySlug } from "@/utility/blog";
import { buildBlogMetadata } from "@/utility/seo";

export const generateStaticParams = () => getBlogParamsByLanguages(["ca"]);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || post.language !== "ca") {
    return {};
  }

  return buildBlogMetadata({
    postId: post.id,
    language: "ca",
    title: `${post.title} | David Moreno`,
    description: post.excerpt,
  });
}

const page = async ({ params }) => {
  const { slug } = await params;

  return <BlogArticlePage slug={slug} allowedLanguages={["ca"]} />;
};

export default page;
