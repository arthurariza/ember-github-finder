import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'github-finder/config/environment';
export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://api.github.com';

  headers = {
    Authorization: `token ${ENV.githubKey}`,
  };

  pathForType() {
    return 'users';
  }
}
