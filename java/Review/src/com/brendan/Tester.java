package com.brendan;

public class Tester {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		Portfolio myPort = new Portfolio();
//		myPort.addProject(new Project());
		

		
		try {
			int[] numbers = new int[0];
			System.out.println(numbers[99]);
		} catch(Exception e) {
			System.out.println(e.toString());
			System.out.println("This was some kind of issue!");
		}
		
		// ArrayIndexOutOfBoundsException
		
		
		
		System.out.println("This is super important code that must MUST run to deliver error messages");
	}
}
