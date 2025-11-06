"use client";

const GlobalErrorPage = ({ error }) => {
  return (
    <div className="min-h-80 flex flex-col justify-center items-center">
      <h2 className="text-[100px] my-3">Error</h2>
      <p className="text-3xl ">{error.message}</p>
    </div>
  );
};
export default GlobalErrorPage;
