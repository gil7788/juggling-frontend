import React, { ReactNode } from "react";
import useFetch from "./hooks/FetchHook.tsx"

interface FetchProps {
    url: string;
    renderSuccess: (data: any) => ReactNode;
    renderError?: (error: any) => ReactNode;
    renderLoading?: () => ReactNode;
}

const Fetch: React.FC<FetchProps> = ({ url, renderSuccess, renderError, renderLoading }) => {
    const { loading, data, error } = useFetch(url);

    if (loading) return renderLoading ? renderLoading() : <h1>Loading...</h1>;
    if (error) return renderError ? renderError(error) : <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (data) return renderSuccess(data);

    return null;
};

export default Fetch;
