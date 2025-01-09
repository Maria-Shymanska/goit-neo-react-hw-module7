import { Bars } from "react-loader-spinner";

export default function Loader() {
  return (
    <Bars
      height="80"
      width="80"
      color="#333333"
      ariaLabel="bars-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
      wrapperClass=""
      visible={true}
    />
  );
}
