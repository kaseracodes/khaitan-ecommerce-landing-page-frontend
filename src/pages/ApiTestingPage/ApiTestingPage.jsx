import { useApiTestingPageLogic } from "./helper";

export default function ApiTestingPage() {

    const {response, error} = useApiTestingPageLogic();

    return (
        <>
        <h1>This is the api testing page</h1>
        {error && (
            <pre style={{ color: 'red', whiteSpace: 'pre-wrap' }}>
                {JSON.stringify(error, null, 4)}
            </pre>
        )}
        {!error && response && (
            <pre style={{ whiteSpace: 'pre-wrap' }}>
                {JSON.stringify(response, null, 4)}
            </pre>
        )}
        </>
  );
}