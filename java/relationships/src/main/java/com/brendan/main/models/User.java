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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Email(message="Email must be an email!")
    @Size(min=5, message="Email must be four or more characters")
    private String email;
    
    @Size(min=5, message="Password must be greater than four characters")
    private String password;
    
    @Transient
    private String passwordConfirmation;
    
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="team_id")
    private Team currentTeam;
    
    @OneToMany(mappedBy="captain", fetch=FetchType.LAZY)
    private List<Team> teams;
    
    @Column(updatable=false)
    private Date createdAt;
    
    private Date updatedAt;
    
    public User() { // always need the empty constructor
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


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getPasswordConfirmation() {
		return passwordConfirmation;
	}


	public void setPasswordConfirmation(String passwordConfirmation) {
		this.passwordConfirmation = passwordConfirmation;
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


	public Team getCurrentTeam() {
		return currentTeam;
	}
	

	public void setCurrentTeam(Team currentTeam) {
		this.currentTeam = currentTeam;
	}


	public List<Team> getTeams() {
		return teams;
	}


	public void setTeams(List<Team> teams) {
		this.teams = teams;
	}
	
	
}
