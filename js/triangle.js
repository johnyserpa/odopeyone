"use strict"

/**
 * Caos Triangle
 */

const Triangle = (r, x_center, y_center) => {
	// Get random
	let _getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

	// Get vertexes
	let _getVertex = (r, angle) => {
		let x = r*cos(angle) + x_center
		let y = r*sin(angle) + y_center
		return {x: x, y: y}
	}
	// Vertex
	let _vertex = [_getVertex(r, 0), _getVertex(r, (1./3)*(2*PI)), _getVertex(r, (2./3)*(2*PI))]

	// Draw triangle
	let drawItself = () => {
		strokeWeight(3)
		stroke(255)
		fill(255,255,255,0)
		triangle(_vertex[0].x,_vertex[0].y,_vertex[1].x,_vertex[1].y,_vertex[2].x,_vertex[2].y)
	}

	// Draw points
	let drawPoint = (initPoint) => {
		strokeWeight(1)
		stroke(255)
		let random = _getRandomInt(0,2)
		let x = (initPoint.x + _vertex[random].x) / 2
		let y = (initPoint.y + _vertex[random].y) / 2
		ellipse(x,y,1,1)
		//console.log(x,y)
		return {
			x:x,
			y:y
		}
	}

	return {
		drawItself: drawItself,
		drawPoint: drawPoint
	}
}

let t
let cw = window.innerWidth
let ch = window.innerHeight
let point
function setup () {
	createCanvas(cw,ch)
	background(0,0,0)

	t = Triangle(cw/3, cw/2, ch/2)
	//t.drawItself()
	point = {x:200, y:200}
	ellipse(point.x, point.y)
}

function draw () {
	point = t.drawPoint({x:point.x, y:point.y})
}

function windowResized() {
	cw = window.innerWidth
	ch = window.innerHeight
	resizeCanvas(cw,ch)
	t = Triangle(cw/3, cw/2, ch/2)
}
