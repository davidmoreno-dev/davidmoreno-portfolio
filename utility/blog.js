import { blogPosts } from "./blog-data.mjs";

export { blogPosts };

export const getBlogPosts = (language) =>
  blogPosts.map((post) => ({
    id: post.id,
    image: post.image,
    comments: post.comments,
    ...post.translations[language],
  }));

export const getBlogPostBySlug = (slug) => {
  for (const post of blogPosts) {
    for (const [language, translation] of Object.entries(post.translations)) {
      if (translation.slug === slug) {
        return {
          id: post.id,
          image: post.image,
          comments: post.comments,
          language,
          ...translation,
        };
      }
    }
  }

  return null;
};

export const getBlogPostById = (id, language) => {
  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    return null;
  }

  return {
    id: post.id,
    image: post.image,
    comments: post.comments,
    ...post.translations[language],
  };
};

export const getAllBlogParams = () =>
  blogPosts.flatMap((post) =>
    Object.values(post.translations).map((translation) => ({
      slug: translation.slug,
    }))
  );

export const getBlogParamsByLanguages = (languages) =>
  blogPosts.flatMap((post) =>
    languages.flatMap((language) => {
      const translation = post.translations[language];

      return translation ? [{ slug: translation.slug }] : [];
    })
  );
