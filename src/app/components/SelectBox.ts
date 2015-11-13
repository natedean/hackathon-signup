import { Component, FORM_DIRECTIVES, NgFor } from 'angular2/angular2';
import { OptionsService } from '../services/OptionsService';

@Component({
	selector: 'select-box',
	directives: [FORM_DIRECTIVES, NgFor],
	template: `
	    <form>
			<select [(ng-model)]='selectedOption'>
				<option *ng-for='#option of optionsService.javascriptOptions'>
					{{ option }}
				</option>
			</select>
		</form>
	`
})
export class SelectBox{
	selectedOption: string;
	
	constructor(
		public optionsService:OptionsService
	){
		this.selectedOption = optionsService.javascriptOptions[0];
	}
}