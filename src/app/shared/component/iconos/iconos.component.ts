import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../../services/firebase.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-iconos',
  templateUrl: './iconos.component.html',
  styleUrls: ['./iconos.component.scss'],
})
export class IconosComponent implements OnInit {
  ss;
  url = '../../../../assets/icons/';

  variable: any;
  datos: any;
  carga: boolean = false;
  constructor(
    private _Service: FirebaseService,
    public config: NgbCarouselConfig
  ) {
    this._Service.Getconsulta('aprender').subscribe((data) => {
      this.datos = data;

      this.carga = true;
    });
    this._Service.Getconsulta('habilidades').subscribe((data: any) => {
      const libreria = [];
      const framework = [];
      const compilado = [];
      const stylo = [];
      const lenguaje = [];
      const SQL = [];
      const noSql = [];
      const entorno = [];
      const git = [];
      const editocodigo = [];
      const herramienta = [];
      const diseno = [];
      const otros = [];
      for (const iterator of data) {
        if (iterator.tecnologia.toLowerCase() == 'lenguaje') {
          lenguaje.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'framework') {
          framework.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'libreria') {
          libreria.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'sql') {
          SQL.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'nosql') {
          noSql.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'compilado') {
          compilado.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'stylo') {
          stylo.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'entorno') {
          entorno.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'git') {
          git.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'editocodigo') {
          editocodigo.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'herramienta') {
          herramienta.push(iterator);
        } else if (iterator.tecnologia.toLowerCase() == 'diseno') {
          diseno.push(iterator);
        } else {
          otros.push(iterator);
        }
      }
      this.variable = lenguaje.concat(
        framework.concat(
          libreria.concat(
            SQL.concat(
              noSql.concat(
                entorno.concat(
                  stylo.concat(
                    compilado.concat(
                      editocodigo.concat(
                        git.concat(
                          herramienta.concat(diseno.concat(otros))
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
      console.log(data);
    });
  }

  ngOnInit(): void {}
  masue($any: any) {}
}
