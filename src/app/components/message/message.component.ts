import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  

  constructor(private msg:MessageService) { }

  
  ngOnInit(): void {
  }

}
