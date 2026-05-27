import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import ErrorBoundary from '../components/widgets/error/ErrorBoundary';
import Header from '../components/widgets/header/Header';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occured!';
  let message = 'Something went wrong';

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = `${error.data}`;
  } else if (error instanceof Error) {
    title = `Error`;
    message = `${error.message}`;
  }
  return (
    <>
      <Header />
      <ErrorBoundary title={title} message={message} />
    </>
  );
}
