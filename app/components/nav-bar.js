import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @tracked mmopen = false;

  @action toggleMenu() {
    this.mmopen = !this.mmopen;
  }
}
