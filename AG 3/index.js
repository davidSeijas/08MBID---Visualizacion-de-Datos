// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');

d3.csv(
  'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv',
  function (error, data) {
    var visualization = d3plus
      .viz()
      .container('#viz1')
      .data([
        { year: 1991, name: 'alpha', value: 15 },
        { year: 1992, name: 'alpha', value: 20 },
      ])
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .draw();
  }
);

d3.json(
  'https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json',
  function (data) {
    var visualization = d3plus
      .viz()
      .container('#viz2')
      .data(data)
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .axes({ ticks: 'false' })
      .draw();
  }
);

d3.json(
  'https://raw.githubusercontent.com/davidSeijas/08MBID---Visualizacion-de-Datos/main/AG%203/datasets/AG3_Datos_Caja_Bigotes.json',
  function (error, data) {
    if (error) throw error;

    var visualization = d3plus
      .viz()
      .container('#viz3')
      .data(data)
      .type('box')
      .id('name')
      .x('year')
      .y('value')
      .draw();
  }
);
