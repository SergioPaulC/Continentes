import { Component } from '@angular/core';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent {
  africaCountries: string[] = [
    'Argelia',
    'Nigeria',
    'Egipto',
    'Sudáfrica',
    'Marruecos',
    'Kenia',
    'Etiopía',
    'Uganda',
    'Ghana',
    'Sudán',
    // Agrega más países de África aquí
  ];

  americaCountries: string[] = [
    'Estados Unidos',
    'Canadá',
    'Brasil',
    'México',
    'Argentina',
    'Colombia',
    'Perú',
    'Chile',
    'Venezuela',
    'Ecuador',
    // Agrega más países de América aquí
  ];

  asiaCountries: string[] = [
    'China',
    'India',
    'Japón',
    'Corea del Sur',
    'Indonesia',
    'Tailandia',
    'Vietnam',
    'Malasia',
    'Filipinas',
    'Arabia Saudita',
    // Agrega más países de Asia aquí
  ];

  europeCountries: string[] = [
    'Francia',
    'Alemania',
    'Italia',
    'España',
    'Reino Unido',
    'Polonia',
    'Grecia',
    'Suecia',
    'Noruega',
    'Portugal',
    // Agrega más países de Europa aquí
  ];

  oceaniaCountries: string[] = [
    'Australia',
    'Nueva Zelanda',
    'Fiyi',
    'Papúa Nueva Guinea',
    'Islas Salomón',
    'Samoa',
    'Tonga',
    'Vanuatu',
    // Agrega más países de Oceanía aquí
  ];

  selectedContinentCountries: string[] = [];
  selectedContinent: string = '';

  showCountries(continent: string) {
    // seleccionar los países del continente clickeado
    this.selectedContinent = continent; // Actualiza el nombre del continente
    switch (continent) {
      case 'África':
        this.selectedContinentCountries = this.africaCountries;
        break;
      case 'América':
        this.selectedContinentCountries = this.americaCountries;
        break;
      case 'Asia':
        this.selectedContinentCountries = this.asiaCountries;
        break;
      case 'Europa':
        this.selectedContinentCountries = this.europeCountries;
        break;
      case 'Oceanía':
        this.selectedContinentCountries = this.oceaniaCountries;
        break;
      default:
        this.selectedContinentCountries = [];
        break;
    }
  }
}
