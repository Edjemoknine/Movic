/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";

const BannerSkelton = () => {
  return (
    <Box>
      <div>
        <Skeleton height={30} width={400} className="bg-gray-500 mb-2" />
        <Skeleton height={30} width={400} className="bg-gray-500" />
      </div>
      <div>
        <Skeleton height={20} width={600} className="bg-gray-500" />
        <Skeleton height={20} width={600} className="bg-gray-500" />
        <Skeleton height={20} width={600} className="bg-gray-500" />
      </div>{" "}
      <Skeleton height={35} width={200} className="bg-gray-500" />
    </Box>
  );
};

export default BannerSkelton;

function Box({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#141414",
        flexDirection: "column",
        gap: "4rem",

        lineHeight: 2,
        paddingLeft: "6rem",
        marginBottom: "0.5rem",
        height: "600px",
      }}
    >
      {children}
    </div>
  );
}
