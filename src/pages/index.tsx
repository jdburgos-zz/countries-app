/** Next core **/
import type { NextPage } from 'next';

/** Dependencies **/
import { Input, Select } from 'antd';
import useSWR from 'swr';

/** Components **/
import { CountryItem } from '@components/CountryItem';
import { ICountry } from '@interfaces/country.interface';

/** Antd **/
const { Option } = Select;

const fetcher = (url: string) => fetch(url).then(res => res.json());
const API = 'https://restcountries.com/v3.1/all';

const Home: NextPage = () => {
  const { data, error } = useSWR(API, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
