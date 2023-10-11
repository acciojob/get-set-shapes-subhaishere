//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get(height,width){
		return {this.height,this.width};
	}
	getArea(){
		return width*height;
	}
}

class Square extends Rectangle {
	Constructor(side ){
		super(side, side );
	}
	getPerimeter(){
		return {4*(this.width)};
	}
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;