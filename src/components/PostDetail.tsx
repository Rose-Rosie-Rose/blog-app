export const PostDetail = () => {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">작성자이름</div>
            <div className="post__date">2024.05.23 목F요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">수정</div>
          </div>
          <div className="post__text">게시글 내용</div>
        </div>
      </div>
    </>
  );
};
