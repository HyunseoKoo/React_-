import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function ProductCard({ products, onNavigate }) {
  const { productNumber } = products;
  console.log(onNavigate);
  console.log(productNumber);

  return (
    <S.Item onClick={() => onNavigate(productNumber)}>
      <h4>{products.productName}</h4>
      <p>상품번호 : {products.productNumber}</p>
      <p>가격: {products.productPrice}</p>
      <p>사이즈: {products.productSize}</p>
      <p>평점: {products.productRating}</p>
      <p>리뷰: {products.productPrice}</p>
    </S.Item>
  );
}
export default ProductCard;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};
