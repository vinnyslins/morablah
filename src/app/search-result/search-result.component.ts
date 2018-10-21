import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/services/properties.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public filters: string[] = [
    'Aceita pet',
    'Piscina',
    'Perto do metrô'
  ];

  constructor(public propertiesService: PropertiesService) { }

  ngOnInit() {
  }

}
