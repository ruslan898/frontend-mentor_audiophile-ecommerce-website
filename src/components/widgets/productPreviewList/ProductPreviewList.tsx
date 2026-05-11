import { useRouteLoaderData, useParams, Link } from 'react-router-dom';
import ProductPreview from '../productPreview/ProductPreview';
import styles from './ProductPreviewList.module.scss';
import type { Product } from '../../../types/types';

export default function ProductPreviewList() {
  const { type } = useParams();
  const data = useRouteLoaderData('root-route').filter(
    (obj: Product) => obj.category === type,
  );
  console.log(data);

  return (
    <div className={styles.productPreviewListWrapper}>
      <div className="container">
        <ul className={styles.productPreviewList}>
          {data.map((obj: Product) => (
            <li>
              <Link to={`${obj.id}`}>
                <ProductPreview productData={obj} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
