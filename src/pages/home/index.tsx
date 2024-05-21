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
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">작성자이름</div>
                <div className="post__date">2024.05.21 화요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">게시글 내용</div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
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
