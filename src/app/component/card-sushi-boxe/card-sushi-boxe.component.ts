import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Box } from '../../models/Box';


@Component({
  selector: 'app-card-sushi-boxe',
  templateUrl: './card-sushi-boxe.component.html',
  styleUrl: './card-sushi-boxe.component.css'
})
export class CardSushiBoxeComponent {
  pathImage = environment.apiGetImages;
  @Input() box: Box = new Box();

}
