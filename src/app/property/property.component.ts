import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from 'src/services/properties.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  private id: number;
  public property: any = {};

  constructor(
    private route: ActivatedRoute,
    private propertiesService: PropertiesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.propertiesService.getPropertyById(this.id).then(response => {
        if (!response) {
          this.router.navigate(['/not-found']);
        }
        this.property = response;
      }).catch(error => {
        // @TODO: Redirecionar para página de erro
      });
    });
  }
}
