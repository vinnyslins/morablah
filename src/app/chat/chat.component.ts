import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/services/properties.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public chat: any[] = [
    { sender: 1, message: 'Oi, Aline. Tudo bem?' },
    { sender: 1, message: 'Vi que você quer a garagem e também quer ficar com a suíte' },
    { sender: 1, message: 'Pra mim tá OK! Você disse que está disposta a pagar 1.200. Show! Vamos dar sequência nessa conversa? :)' },
    { sender: 0, message: 'Siiiim! Você já morou compartilhando ap com alguém antes na vida?' },
    { sender: 1, message: 'Não. Essa é a primeira' },
    { sender: 0, message: 'Sem problemas. Só me preocupa um pouco pq morar junto exige regras' },
    { sender: 1, message: 'Quais regras?' },
    { sender: 0, message: 'Ahh. Coisas básicas. Evitar bagunça, lavar a louça, etc' },
    { sender: 1, message: 'Sem problemas!' }
  ];

  constructor(
    private router: Router,
    private propertiesService: PropertiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  createProposal() {
    this.route.params.subscribe(params => {
      const groupId = +params['id'];
      const personalId = 1;
      this.propertiesService.createProposal(groupId, personalId).then((response: any) => {
        this.router.navigate([`/proposal/${response.id}`]);
      });
    });
  }
}
