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
const { Search } = Input;

const fetcher = (url: string) => fetch(url).then(res => res.json());
const API = 'https://restcountries.com/v3.1/all';

const Home: NextPage = () => {
  const { data, error } = useSWR(API, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const countries = data.map((country: ICountry, index: number) => (
    <CountryItem key={index} country={country} />
  ));

  const handleSearch = (value: string) => {
    if (!value) return;

    console.log(value);
  };

  const handleSelect = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <Search
        className="input"
        placeholder="Search for a country..."
        onSearch={handleSearch}
        allowClear
        size="large"
        style={{ marginBottom: '30px' }}
      />
      <Select
        allowClear
        size="large"
        style={{ marginBottom: '30px' }}
        className="select"
        placeholder="Filter by Region"
        onSelect={handleSelect}
      >
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
