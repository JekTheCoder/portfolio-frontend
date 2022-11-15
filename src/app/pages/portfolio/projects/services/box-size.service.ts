import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class BoxSizeService {
	constructor() {}

	calculateResizeDimension(
		rectangle1D1: number,
		rectangle2D1: number,
		rectangle2D2: number
	): number {
		return (rectangle2D2 * rectangle1D1) / rectangle2D1;
	}
}
