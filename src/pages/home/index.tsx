import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <header>
        <div>
          <Link to="posts/new">글쓰기</Link>
          <Link to="posts">게시글</Link>
          <Link to="profile">프로필</Link>
        </div>
      </header>
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>게시글 {index}</Link>
          </div>
        ))}
      </div>
      <footer>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </footer>
    </>
  );
};
