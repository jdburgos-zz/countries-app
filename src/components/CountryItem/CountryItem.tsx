/** React core **/
import React from 'react';

/** Next core **/
import Link from 'next/link';

/** Components **/
import { Card } from '@/components/ui';

/** Interfaces **/
import { ICountry } from '@/interfaces/country.interface';

import styles from './CountryItem.module.scss';

type CountryItemProps = {
  country: ICountry;
};

export const CountryItem: React.FC<CountryItemProps> = ({ country }) => (
  <Card className={styles['country-item']}>
    <Link href={`/country-detail/${country.name.common}`}>
      <a className={styles['country-item__link']} data-test="country-item">
        <img
          className={styles['country-item__img']}
          src={country.flags.svg}
          alt={country.name.official}
        />
        <div className={styles['country-item__content']}>
          <h3 className={styles['country-item__title']}>{country.name.common}</h3>
          <div className={styles['country-item__description']}>
            <span className={styles['country-item__label']}>Population: </span>
            <span className={styles['country-item__text']}>
              {country.population.toLocaleString('en')}
            </span>
          </div>
          <div className={styles['country-item__description']}>
            <span className={styles['country-item__label']}>Region: </span>
            <span className={styles['country-item__text']}>{country.region}</span>
          </div>
          <div className={styles['country-item__description']}>
            <span className={styles['country-item__label']}>Capital: </span>
            <span className={styles['country-item__text']}>{country.capital}</span>
          </div>
        </div>
      </a>
    </Link>
  </Card>
);
