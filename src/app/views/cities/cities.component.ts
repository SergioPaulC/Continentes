import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  selectedCountry: string = ''; // Para almacenar el país seleccionado
  selectedCountryCities: string[] = []; // Para almacenar las ciudades del país

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCountry = params['country']; // Obtiene el país desde los parámetros de la URL
      // Lógica para seleccionar las ciudades del país (puedes asignarlas desde tus datos)
      this.selectedCountryCities = this.getCitiesForCountry(this.selectedCountry);
    });
  }

  // Agrega tu lógica para obtener las ciudades del país
  getCitiesForCountry(country: string): string[] {
    // Aquí debes implementar la lógica para obtener las ciudades del país
    // Puedes utilizar servicios, bases de datos o datos predefinidos
    // Devuelve un arreglo de ciudades
    return [];
  }
}
