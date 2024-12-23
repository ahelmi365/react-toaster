import { TLoading } from "@customTypes/shared";

interface ILoadingProps {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
}

const Loading = ({ status, error, children }: ILoadingProps) => {
  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return <>{children}</>;
};

export default Loading;
