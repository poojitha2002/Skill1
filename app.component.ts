import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seven';
  seven=[
    {name:"Taj Mahal",image:"\assets\images\taj.jpg",link:"/tajmahal"},
    {name:"Great Wall Of China",image:"\assets\images\china.jpg",link:"/china"},
    {name:"Christ The Redeemer",image:"\assets\images\christ.jpg",link:"/christ"},
    {name:"Chichen Itza",image:"\assets\images\chichen.jpg",link:"/cichen"},
    {name:"Machu Pichu",image:"\assets\images\ma.jpg",link:"/machu"},
    {name:"Petra",image:"\assets\images\petra.jpg",link:"/petra"},
    {name:"Roman Colloseum",image:"\assets\images\coloseum.jpg",link:"/roman"}

  ];
}
