import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  navLinks = [
    {
      route: 'index',
      name: 'Home',
    },
    {
      route: 'about',
      name: 'About',
    },
  ];
}
