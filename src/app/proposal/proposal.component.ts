import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from 'src/services/properties.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  public proposal: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertiesService: PropertiesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.propertiesService.getProposalById(id).then(response => {
        if (!response) {
          this.router.navigate(['/not-found']);
        }
        this.proposal = response;
      });
    });
  }

  doneProposal() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.propertiesService.doneProposal(id).then(response => {
        this.router.navigate(['/contrato']);
      }).catch(error => {
        // @TODO: Fazer tratativa de erro
      });
    });
  }
}
