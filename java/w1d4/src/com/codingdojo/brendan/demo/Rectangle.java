package com.codingdojo.brendan.demo;

public class Rectangle extends Thing implements AreaInterface {

	public Rectangle() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void sayName() {
		// TODO Auto-generated method stub
		System.out.println(this.getClass().getSimpleName());
	}
	
	public double getArea() {
		return 0.0;
	}

}
