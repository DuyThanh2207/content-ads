import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ComponentContext } from "../../contexts/ComponentProvider";

const Consumer = () => {
  const { componentsData } = useContext(ComponentContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Consumer Page</h1>
      <button onClick={() => navigate("/admin")}>Admin</button>
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-2 items-center">
          {componentsData.map((c, idx) => (
            <Fragment key={idx}>
              {c.type === "paragraph" ? (
                <span>{c.content}</span>
              ) : c.type === "button" ? (
                <button onClick={() => c.message && alert(c.message)}>
                  {c.content}
                </button>
              ) : (
                <img
                  className="bg-gray-300 object-cover"
                  width={100}
                  height={100}
                  src={c.content}
                  alt="img"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consumer;
