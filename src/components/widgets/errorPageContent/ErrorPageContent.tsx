import Title from '../../ui/title/Title';
import styles from './ErrorPageContent.module.scss';

type ErrorPageContentProps = {
  title: string;
  message: string;
};

export default function ErrorPageContent({
  title,
  message,
}: ErrorPageContentProps) {
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
