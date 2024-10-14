import { Link } from "react-router-dom";
import { Footer, Header, PostList } from "../../components";

export const HomePage = () => {
  return (
    <>
      <Header />
      <PostList /> 
      <Footer />
    </>
  );
};
