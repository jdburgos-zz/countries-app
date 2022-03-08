/** Dependencies **/
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/dom';
import 'whatwg-fetch';

configure({ testIdAttribute: 'data-test' });
