import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        title: title,
        summary: summary,
        content: content,
        createdAt: new Date()?.toLocaleDateString(),
        email: user?.email,
      });

      toast?.success("게시글을 생성했습니다.");
      navigate("/ ");
    } catch (e: any) {
      console.log(e);
      toast?.error(e?.code);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;

    if (name === "title") {
      setTitle(value);
    }

    if (name === "summary") {
      setSummary(value);
    }

    if (name === "content") {
      setContent(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          onChange={handleInputChange}
          value={title}
        ></input>
      </div>
      <div className="form__block">
        <label htmlFor="summary">요약</label>
        <input
          type="text"
          name="summary"
          id="summary"
          required
          onChange={handleInputChange}
          value={summary}
        ></input>
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          id="content"
          required
          onChange={handleInputChange}
          value={content}
        />
      </div>

      <div className="form__block">
        <input type="submit" value="제출" className="form__btn-submit" />
      </div>
    </form>
  );
};
