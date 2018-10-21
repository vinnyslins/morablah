import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/services/properties.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public group: any = {};
  public id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertiesService: PropertiesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.propertiesService.getGroupById(this.id).then(response => {
        if (!response) {
          this.router.navigate(['/not-found']);
        }
        this.group = response;
      }).catch(error => {
        // @TODO: Redirecionar para página de erro
      });
    });
  }
}
