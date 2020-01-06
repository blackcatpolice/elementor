import ComponentBase from 'elementor-api/modules/component-base';
import BackwardsCompatibility from './backwards-compatibility.js';
import * as hooksData from './hooks/data/';
import * as hooksUI from './hooks/ui/';

export default class Component extends ComponentBase {
	getNamespace() {
		return 'document';
	}

	onInit() {
		new BackwardsCompatibility();

		super.onInit();

		Object.values( hooksData ).forEach( ( hook ) => new hook() );
		Object.values( hooksUI ).forEach( ( hook ) => new hook() );
	}

	defaultCommands() {
		return {
			//example: ( args ) => ( new Commands.Example( args ).run() ),
		};
	}
}
