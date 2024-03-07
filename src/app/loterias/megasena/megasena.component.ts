import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-megasena',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './megasena.component.html',
  styleUrl: './megasena.component.scss'
})
export class MegasenaComponent {

  formBuilder = inject(FormBuilder)

  exclude: boolean = false
  excludedList: number[] = []

  megasenaForm = this.formBuilder.group({
    numbersQuantity: 6,
    excludedNumbers: '',
    drawQuantity: 1
  })

  maxNumber: number = 60

  drawNumbers: number[] = []

  results: number[][] = []
  showResults: boolean = false

  start(){
    this.results = []
    this.showResults = true
    let drawQuantity = this.megasenaForm.value.drawQuantity
    drawQuantity = this.fixValue(drawQuantity)
    if(drawQuantity)
    for(let i = 0; i < drawQuantity; i++){
      this.draw()
    }

  }

  draw(){
    this.drawNumbers = []
    let {numbersQuantity, excludedNumbers} = this.megasenaForm.value

    if(this.exclude && excludedNumbers){
      let strList = excludedNumbers.split(',')
      this.excludedList = strList.map(string => Number(string))
    }

    if(numbersQuantity){
      for(let i = 0; i < numbersQuantity; i++){
        let numberToAdd = (Math.floor((Math.random() * this.maxNumber) + 1))
        if(this.exclude && this.excludedList.includes(numberToAdd) || this.drawNumbers.includes(numberToAdd)){
            i--
        }else{
          this.drawNumbers.push(numberToAdd)
          this.drawNumbers.sort((a, b) => a - b)
        }
      }
      this.results.push(this.drawNumbers)
    }
  }

  fixValue(value: any){

    if(value){
      if(value > 20){
        return 20
      }
      else if(value < 1){
        return 1
      }
      else{
        return value
      }
    }
    return value
  }

  copy(){
    let formattedString= this.results.map(subArray => subArray.join(' ')).join(' | ')
    navigator.clipboard.writeText(formattedString)
  }
}

