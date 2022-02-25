/** Next core **/
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

/** Dependencies **/
import { Input, Select } from 'antd';

/** Components **/
import { CountryItem } from '@components/CountryItem';
import { ICountry } from '@interfaces/country.interface';

/** Antd **/
const { Option } = Select;

const Home: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const countries = data.map((country: ICountry, index: number) => (
    <CountryItem key={index} country={country} />
  ));

  return (
    <>
      <Input placeholder="Basic usage" />
      <Select placeholder="Filter by Region">
        <Option value="africa">Africa</Option>
        <Option value="america">America</Option>
        <Option value="asia">Asia</Option>
        <Option value="europe">Europe</Option>
        <Option value="oceania">Oceania</Option>
      </Select>
      <div>{countries}</div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  return {
    props: { data },
  };
};
