/** React core **/
import React from 'react';

/** Next core **/
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';

/** Dependencies **/
import { Button } from 'antd';

/** Interfaces **/
import { ICountry } from '@interfaces/country.interface';

/** Styles **/
import styles from './CountryDetail.module.scss';

const CountryDetail: NextPage = ({ country }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const domain = country.tld ? country.tld[0] : null;
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
    ? Object.entries(country.borders).map((borderCountry: any, index) => (
        <Button key={index} className={styles['country-detail__btn']}>
          {borderCountry[1]}
        </Button>
      ))
    : null;
  const domainContent = (
    <div className={styles['country-detail__description']}>
      <span className={styles['country-detail__label']}>Top Level Domain: </span>
      <span className={styles['country-detail__text']}>{domain}</span>
    </div>
  );
  const borderCountriesContent = (
    <div className={styles['country-detail__footer']}>
      <h3>Border Countries: </h3>
      <div className={styles['country-detail__actions']}>{borderCountries}</div>
    </div>
  );
  const currenciesContent = (
    <div className={styles['country-detail__description']}>
      <span className={styles['country-detail__label']}>Currencies: </span>
      <span className={styles['country-detail__text']}>{currencies}</span>
    </div>
  );
  const languagesContent = (
    <div className={styles['country-detail__description']}>
      <span className={styles['country-detail__label']}>Languages: </span>
      <span className={styles['country-detail__text']}>{languages}</span>
    </div>
  );

  const clases = `${styles['country-detail__btn']} ${styles['country-detail__btn-back']}`;

  return (
    <div className={styles['country-detail']}>
      <Button className={clases} onClick={() => router.back()}>
        <i className="cp-arrow-left2"></i>
        <span>Back</span>
      </Button>
      <img
        className={styles['country-detail__img']}
        src={country.flags.svg}
        alt={country.name.official}
      />
      <h1>{country.name.common}</h1>
      <div className={styles['country-detail__content']}>
        <div className={styles['country-detail__description']}>
          <span className={styles['country-detail__label']}>Native Name: </span>
          <span className={styles['country-detail__text']}>{country.name.official}</span>
        </div>
        <div className={styles['country-detail__description']}>
          <span className={styles['country-detail__label']}>Population: </span>
          <span className={styles['country-detail__text']}>
            {country.population.toLocaleString('en')}
          </span>
        </div>
        <div className={styles['country-detail__description']}>
          <span className={styles['country-detail__label']}>Region: </span>
          <span className={styles['country-detail__text']}>{country.region}</span>
        </div>
        <div className={styles['country-detail__description']}>
          <span className={styles['country-detail__label']}>Sub Region: </span>
          <span className={styles['country-detail__text']}>{country.subregion}</span>
        </div>
        <div className={styles['country-detail__description']}>
          <span className={styles['country-detail__label']}>Capital: </span>
          <span className={styles['country-detail__text']}>{country.capital}</span>
        </div>
      </div>
      <div className={styles['country-detail__content']}>
        {domain && domainContent}
        {currencies && currenciesContent}
        {languages && languagesContent}
      </div>
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
