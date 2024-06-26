import { useNavigate } from "react-router-dom";

export default function OpenFile({ url }) {
  const navigate = useNavigate();

  return (
    <p
      onClick={async () => {
        try {
          const response = await fetch(
            `http://localhost:3001/open-file?filePath=${encodeURIComponent(
              url
            )}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.text();
          console.log("File opened successfully:", data);
          if (url === "./tests/Test5.jsx") {
            navigate("/entry/mockup");
          }
        } catch (error) {
          console.error(`Error opening file: ${error}`);
        }
      }}
    >
      <u className="text-orange-200 cursor-pointer">Click here to get started.</u>
    </p>
  );
}
