import Title from '../../ui/title/Title';
import styles from './ErrorBoundary.module.scss';

type ErrorBoundaryProps = {
  title: string;
  message: string;
};

export default function ErrorBoundary({
  title,
  message,
}: ErrorBoundaryProps) {
  return (
    <section className={styles.error}>
      <div className="container">
        <div className={styles.errorContent}>
          <Title level={1} variant="md-28">
            {title}
          </Title>
          <p>{message}</p>
        </div>
      </div>
    </section>
  );
}
