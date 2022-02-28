/** React core **/
import { useEffect, useState } from 'react';

/** Next core **/
import type { NextPage } from 'next';

/** Dependencies **/
import { Input, Select } from 'antd';
import useSWR from 'swr';

/** Components **/
import { CountryItem } from '@components/CountryItem';

/** Interfaces **/
import { ICountry } from '@interfaces/country.interface';

/** Antd **/
const { Option } = Select;
const { Search } = Input;

const fetcher = (url: string) => fetch(url).then(res => res.json());
const API = 'https://restcountries.com/v3.1/all';

const Home: NextPage = () => {
  const { data, error } = useSWR(API, fetcher);
  const [dataCountries, setData] = useState(data);

  useEffect(() => {
    setData(data);
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data || !dataCountries) return <div>loading...</div>;

  const countries = dataCountries.map((country: ICountry, index: number) => (
    <CountryItem key={index} country={country} />
  ));

  const handleClear = () => {
    setData(data);
  };

  const handleSearch = (value: string) => {
    if (!value) {
      handleClear();

      return;
    }

    const dataFiltered = [
      ...data.filter((country: ICountry) =>
        country.name.common.toLowerCase().includes(value.toLowerCase()),
      ),
    ];
    setData(dataFiltered);
  };

  const handleSelect = (value: string) => {
    const dataFiltered = [
      ...data.filter((country: ICountry) => country.region.toLowerCase() === value),
    ];
    setData(dataFiltered);
  };

  return (
    <>
      <Search
        className="input"
        placeholder="Search for a country..."
        allowClear
        size="large"
        style={{ marginBottom: '30px' }}
        onSearch={handleSearch}
      />
      <Select
        allowClear
        size="large"
        style={{ marginBottom: '30px' }}
        className="select"
        placeholder="Filter by Region"
        onSelect={handleSelect}
        onClear={handleClear}
      >
        <Option value="africa">Africa</Option>
        <Option value="americas">Americas</Option>
        <Option value="asia">Asia</Option>
        <Option value="europe">Europe</Option>
        <Option value="oceania">Oceania</Option>
      </Select>
      <div>{countries}</div>
    </>
  );
};

export default Home;
