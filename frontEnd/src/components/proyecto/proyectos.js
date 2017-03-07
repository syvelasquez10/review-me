import React, {Component} from 'react';
import Proyecto from './proyecto';
import {chunk} from 'lodash'

class Proyectos extends Component{

  organize(){
    var arr=[]
    this.props.proyectos.map((proyecto)=>{
      arr.push(<div className="col-md-4"><Proyecto key={proyecto.id} proyecto={proyecto}/></div>);
    })
    /*Sergio Velasquez: Para que sirve chunck()? busque pero no encontre algo claro*/
    var chu = chunk(arr,3);
    return chu;
  }

  render(){
    if (this.props.proyectos){
      return(
        <div>
          <div className="tit text-center">
            <h1>
              Current projects
            </h1>
            <hr></hr>
          </div>
          /*Sergio Velasquez: No entiendo muy bien que se está haciendo aquí, sería bueno agregar algunos comentarios
          explicando que se hace*/
          {this.organize().map((grupo,index)=>{
            console.log(grupo);
              return(
                <div className="row">
                  {grupo}
                </div>
              )


          })}
        </div>
      )
    }
    else{
      return(<div></div>);
    }

  }

}

export default Proyectos;
