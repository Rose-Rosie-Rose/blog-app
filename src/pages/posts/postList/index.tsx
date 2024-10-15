import { Footer, Header, PostList } from "components";

export const PostListPage = () => {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
};
