import fatchRequest from '../utils/FatchRequest';

export function query() {
  return fatchRequest('/api/users');
}
