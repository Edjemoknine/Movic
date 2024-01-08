/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";

const BannerSkelton = () => {
  return (
    <Box>
      <div>
        <Skeleton
          height={30}
          className="md:w-[400px] w-[300px]   bg-gray-500 mb-2"
        />
        <Skeleton
          height={30}
          className="md:w-[400px] w-[300px]   bg-gray-500"
        />
      </div>
      <div>
        <Skeleton
          height={15}
          className="md:w-[600px] w-[300px]   bg-gray-500"
        />
        <Skeleton
          height={15}
          className="md:w-[600px] w-[300px]   bg-gray-500"
        />
        <Skeleton
          height={15}
          className="md:w-[600px] w-[300px]   bg-gray-500"
        />
      </div>{" "}
      <Skeleton height={35} className="md:w-[200px] w-[100px]   bg-gray-500" />
    </Box>
  );
};

export default BannerSkelton;

function Box({ children }) {
  return (
    <div
      className="pl-6 md:pl-24"
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#141414",
        flexDirection: "column",
        gap: "4rem",

        lineHeight: 2,

        marginBottom: "0.5rem",
        height: "600px",
      }}
    >
      {children}
    </div>
  );
}
