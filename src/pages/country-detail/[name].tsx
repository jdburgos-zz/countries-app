/** Next core **/
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ICountry } from '@interfaces/country.interface';
import styles from '@components/CountryItem/CountryItem.module.scss';
import React from 'react';

const CountryDetail: NextPage = ({ country }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const currencies = country.currencies
    ? Object.entries(country.currencies)
        .map((currency: any) => currency[1].name)
        .join(', ')
    : null;
  const languages = country.languages
    ? Object.entries(country.languages)
        .map((language: any) => language[1])
        .join(', ')
    : null;
  const borderCountries = country.borders
    ? Object.entries(country.borders)
        .map((borderCountry: any) => borderCountry[1])
        .join(', ')
    : null;
  const borderCountriesContent = (
    <div>
      <span>Border Countries: </span>
      <span>{borderCountries}</span>
    </div>
  );
  const currenciesContent = (
    <div>
      <span>Currencies: </span>
      <span>{currencies}</span>
    </div>
  );
  const languagesContent = (
    <div>
      <span>Languages: </span>
      <span>{languages}</span>
    </div>
  );

  return (
    <div>
      <img
        className={styles['country-item__img']}
        src={country.flags.svg}
        alt={country.name.official}
      />
      <h1>{country.name.common}</h1>
      <div>
        <span>Native Name: </span>
        <span>{country.name.official}</span>
      </div>
      <div>
        <span>Population: </span>
        <span>{country.population}</span>
      </div>
      <div>
        <span>Region: </span>
        <span>{country.region}</span>
      </div>
      <div>
        <span>Sub Region: </span>
        <span>{country.subregion}</span>
      </div>
      <div>
        <span>Capital: </span>
        <span>{country.capital}</span>
      </div>
      <div>
        <span>Top Level Domain: </span>
        <span>{country.tld}</span>
      </div>
      {currencies && currenciesContent}
      {languages && languagesContent}
      {borderCountries && borderCountriesContent}
    </div>
  );
};

export default CountryDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { name: string } }[] = [];
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data: ICountry[] = await response.json();

  data.forEach(country => {
    paths.push({ params: { name: country.name.common } });
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  // @ts-ignore
  const { name } = params;
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data: ICountry[] = await response.json();
  const country = data[0];
  const title = `${country.name.common}`;

  return {
    props: { title, country },
    revalidate: true,
  };
};
