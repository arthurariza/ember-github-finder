import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  navLinks = [
    {
      route: 'index',
      name: 'Home',
    },
    {
      route: 'users',
      name: 'Users',
    },
    {
      route: 'about',
      name: 'About',
    },
  ];
}
