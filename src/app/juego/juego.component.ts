import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  color1: string="sincolor";
  color2: string="sincolor";
  color3: string="sincolor";
  color4: string="sincolor";
  color5: string="sincolor";
  color6: string="sincolor";

  constructor() { }

  ngOnInit(): void {
  }

  control(dado1:string, dado2:string, dado3:string){
    if (dado1==dado2 && dado1==dado3){
      if (dado1=="1"){
        this.color1="pintar";
      }
      if (dado1=="2"){
        this.color2="pintar";
      }
      if (dado1=="3"){
        this.color3="pintar";
      }
      if (dado1=="4"){
        this.color4="pintar";
      }
      if (dado1=="5"){
        this.color5="pintar";
      }
      if (dado1=="6"){
        this.color6="pintar";
      }

    }
  }

  gano(){
    if(this.color1=="pintar" && this.color1==this.color2 && this.color3==this.color4 && this.color5==this.color6){
      alert("Gano")
    }
  }

}
