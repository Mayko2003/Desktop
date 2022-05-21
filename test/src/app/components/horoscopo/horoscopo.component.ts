import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { AztroService } from 'src/app/services/aztro.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  signos = [
    {es: "Aries", en: "Aries"},
    {es: "Tauro", en: "Taurus"},
    {es: "Géminis", en: "Gemini"},
    {es: "Cáncer", en: "Cancer"},
    {es: "Leo", en: "Leo"},
    {es: "Virgo", en: "Virgo"},
    {es: "Libra", en: "Libra"},
    {es: "Escorpio", en: "Scorpio"},
    {es: "Sagitario", en: "Sagittarius"},
    {es: "Capricornio", en: "Capricorn"},
    {es: "Acuario", en: "Aquarius"},
    {es: "Piscis", en: "Pisces"}
  ]

  submited: boolean = false
  horoscopo!:Horoscopo

  constructor(private aztroService: AztroService) { 
    this.horoscopo = new Horoscopo()
  }

  ngOnInit(): void {
  }

  obtenerHoroscopo() {
    this.aztroService.obtenerHoroscopo(this.horoscopo.signo, this.horoscopo.dia).subscribe(
      (data) => {
        this.horoscopo.descripcion = data.description
        this.horoscopo.rangoFecha = data.date_range
        this.horoscopo.fecha = data.current_date
        this.horoscopo.color = data.color
    },error => console.log(error))
    this.submited = true
  }

}
