package com.brendan;

import java.util.ArrayList;

public class Portfolio {
	
	private ArrayList<Project> projects;

	public Portfolio() {
		// TODO Auto-generated constructor stub
	}
	
//	public void readPortfolio() {
//		for(Project project : this.getProjects()) {
//
//		}
//	}
//	
//	public void addProject(Project p) {
//		this.getProjects().add(p);
//	}

	public ArrayList<Project> getProjects() {
		return projects;
	}

	public void setProjects(ArrayList<Project> projects) {
		this.projects = projects;
	}
}
