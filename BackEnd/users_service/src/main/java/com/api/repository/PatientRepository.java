package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.api.entities.Patient;

@RepositoryRestResource
public interface PatientRepository extends JpaRepository<Patient, Long>{
	
	

}
