import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { toast } from "react-toastify";

export const Profile = () => {
  const auth = getAuth(app);

  const onSingOutHandler = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      toast.success("로그아웃 되었습니다.");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image"></div>
        <div>
          <div className="profile__email">{auth?.currentUser?.email}</div>
          <div className="profile__name">
            {auth?.currentUser?.displayName || "사용자"}
          </div>
        </div>
      </div>
      <div
        role="presentation"
        className="profile__logout"
        onClick={onSingOutHandler}
      >
        logout
      </div>
    </div>
  );
};
