import Model, { attr } from '@ember-data/model';

export default class UserListModel extends Model {
  @attr login;
  @attr avatar_url;
  @attr html_url;
}
