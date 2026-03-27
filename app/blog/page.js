"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/layouts/Header";
import DaveLayout from "@/layouts/DaveLayout";
import { menus } from "@/utility/data";
import { getPathForBlogPost } from "@/utility/routes";
import { getBlogPosts } from "@/utility/blog";
import Link from "next/link";

const uiContent = {
  es: { title: "Blog", comments: "Comentarios" },
  ca: { title: "Blog", comments: "Comentaris" },
  en: { title: "Blog", comments: "Comments" },
  sv: { title: "Blogg", comments: "Kommentarer" },
};

const BlogPost = ({ id, image, date, title, excerpt, comments, commentsLabel, language }) => {
  const bgImage = "url(/images/blog/" + image + ".webp)";
  const backgroundStyle = {
    background: "url('/images/blog/" + image + ".webp') 0% 0% / cover no-repeat",
  };

  return (
    <div className="col-lg-6">
      <div className="rounded-1 bg-color text-dark overflow-hidden">
        <div className="row g-0">
          <div className="col-sm-6">
            <div className="auto-height relative" data-bgimage={bgImage} style={backgroundStyle}>
              <div className="abs start-0 top-0 bg-dark text-white p-3 pb-2 m-3 text-center fw-600 rounded-1">
                <div className="fs-36 mb-0">{date.day}</div>
                <span>{date.month}</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 relative">
            <div className="p-30 pb-60">
              <h4 className="fs-28 lh-1-2">
                <Link className="text-dark" href={getPathForBlogPost(id, language)}>
                  {title}
                </Link>
              </h4>
              <p className="mb-0">{excerpt}</p>
              <div className="abs bottom-0 pb-20">
                <div className="d-inline fs-14 fw-600 me-3">
                  <i className="icofont-chat me-2" />
                  {comments} {commentsLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const { language } = useLanguage();
  const copy = uiContent[language];
  const posts = getBlogPosts(language);

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
        <Breadcrumb title={copy.title} style={2} />
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              {posts.map((post, index) => (
                <BlogPost
                  key={index}
                  {...post}
                  language={language}
                  commentsLabel={copy.comments}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </DaveLayout>
  );
};

export default page;
