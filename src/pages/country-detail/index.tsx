/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const title = 'Country detail';

const CountryDetail: NextPage = () => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default CountryDetail;

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: { title },
  };
};
