import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]'
  // selector: '.app-servers'
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    console.log('Message send to the console');
  }

  onUpdateServerName(event: Event){
    // const targetElement = event.target as HtmlInputElement;
    // this.serverName = targetElement.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
