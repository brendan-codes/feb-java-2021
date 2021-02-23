package com.brendan.main.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String firstName;
    
    private String lastName;
    
    private int age;
    
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="school_id")
    private School school;
    
//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(
//        name = "categories_products", 
//        joinColumns = @JoinColumn(name = "product_id"), 
//        inverseJoinColumns = @JoinColumn(name = "category_id")
//    )
//    private List<Category> categories;
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
    	name = "students_teams",
    	joinColumns = @JoinColumn(name = "student_id"),
    	inverseJoinColumns = @JoinColumn(name = "team_id")
    )
    private List<Team> teams;
    
    public Student() {
        
    }
    
    // other getters and setters removed for brevity
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public School getSchool() {
		return school;
	}

	public void setSchool(School school) {
		this.school = school;
	}

	public List<Team> getTeams() {
		return teams;
	}

	public void setTeams(List<Team> teams) {
		this.teams = teams;
	}
	
	
    
	// reminder: add date setters
}
