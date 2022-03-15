import { Controller } from "@hotwired/stimulus"
import HillChart from 'hill-chart';

export default class extends Controller {
  static values = {
    items: Array,
  }

  initialize() {
    console.log(this.itemsValue)
    const data = this.itemsValue.map((item) => {
      return {
        id: item.id,
        description: item.description,
        x: item.position,
        size: 7,
        color: 'blue',
        link: '',
      }
    })

    const hill = new HillChart(data);
    hill.render();

    hill.on('move', (x, y) => {
      console.log(`y: ${y}`);
    });
  }
}
