import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/layouts/Header";
import DaveLayout from "@/layouts/DaveLayout";
import { menus } from "@/utility/data";
import { getBlogPostBySlug } from "@/utility/blog";
import { notFound } from "next/navigation";

const pageTitles = {
  es: "Blog",
  ca: "Blog",
  en: "Blog",
  sv: "Blogg",
};

const BlogArticlePage = ({ slug, allowedLanguages }) => {
  const post = getBlogPostBySlug(slug);

  if (!post || (allowedLanguages && !allowedLanguages.includes(post.language))) {
    notFound();
  }

  return (
    <DaveLayout bodyClass="home-7" darkMode={false}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <Header
                  menus={menus.main}
                  activePage={5}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb title={pageTitles[post.language]} style={2} />
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-lg-6">
                <div
                  className="relative jarallax h-100 sm-auto-height rounded-1 overflow-hidden wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <img
                    src={"/images/blog/" + post.image + ".webp"}
                    className="jarallax-img"
                    alt={post.title}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="relative rounded-1 overflow-hidden p-lg-5 p-4 wow bg-color h-100 fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="align-middle">
                    <div className="subtitle">
                      <div className="d-inline fs-14 fw-bold me-3">
                        <i className="icofont-tag text-dark me-2" />
                        {post.tag}
                      </div>
                      <div className="d-inline fs-14 fw-600">
                        <i className="icofont-ui-calendar text-dark me-2" />
                        {post.metaDate}
                      </div>
                    </div>
                    <h2>{post.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4 gx-5">
              <div className="col-lg-10 offset-lg-1">
                <div className="blog-read">
                  <div className="post-text">
                    {post.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DaveLayout>
  );
};

export default BlogArticlePage;
