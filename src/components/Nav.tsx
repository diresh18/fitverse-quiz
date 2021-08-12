import { useAuth } from "../context/auth/AuthContext";

export const Nav = () => {
  const { logoutUser } = useAuth();

  return (
    <>
      <div className="flex justify-between items-center h-16 sticky top-0 right-0 left-0 shadow-md">
        <div className="ml-4 text-3xl font-bold">Fitverse Quiz</div>
        <button
          className="bg-blue-700 rounded text-white px-3 py-1 mr-6 "
          onClick={() => logoutUser()}
        >
          Logout
        </button>
      </div>
    </>
  );
};
