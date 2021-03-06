package com.codingdojo.brendan;

public class Square extends Dot {
	
	private int leg;

	public Square(int x, int y, int leg) {
		super(x, y);
		this.setLeg(leg);
	}
	
	public int getArea() {
		return leg * leg;
	}

	public int getLeg() {
		return leg;
	}

	public void setLeg(int leg) {
		this.leg = leg;
	}

}
