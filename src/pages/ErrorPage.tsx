import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import ErrorPageContent from '../components/widgets/errorPageContent/ErrorPageContent';
import Header from '../components/widgets/header/Header';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occured!';
  let message = 'Something went wrong';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = 'Not found!';
      message = 'Could not find resource or page';
    } else {
      title = error.data;
      message = error.statusText;
    }
  }

  return (
    <>
      <Header />
      <ErrorPageContent title={title} message={message} />
    </>
  );
}
