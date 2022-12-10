package com.rh.project.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;

import org.springframework.web.bind.annotation.*;

import com.rh.project.entity.*;
import com.rh.project.repository.*;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PersonnelController {

	@Autowired
	PersonnelRepository personnelRepository;


	@GetMapping("/personnels")
	public ResponseEntity<Object> getAllPersonnels() {
		try {
		List<Personnel> personnels = personnelRepository.findAll();
		
		List<Personnel> personnel= new ArrayList<Personnel>();
		for(Personnel p:personnel) {
			if(!p.getChildren().isEmpty() || p.getParent()==null) {
				personnels.add(p);
			}
		}
		
		return new ResponseEntity<Object>(personnels, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Object> (null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	
	@GetMapping("/personnels/{id}")
	public ResponseEntity<Object> getPersonnelById(@PathVariable("id") Long id) {
		try {
		
			Personnel personnels = personnelRepository.findById(id).get();
		    return new ResponseEntity<Object>(personnels, HttpStatus.OK);				
		
		} catch(Exception ex) {
		
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/personnels")
	public ResponseEntity<Personnel> createPersonnel(@RequestBody Personnel personnel) {
		try {
		
		    personnelRepository.save(personnel);
			return new ResponseEntity<>(personnel, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/personnels/{id}")
	public ResponseEntity<Personnel> createTeams(@PathVariable("id") Long id,@RequestBody Personnel personnel) {
		try {
            Personnel p = personnelRepository.findById(id).get();
            personnel.setParent(p);
		    personnelRepository.save(personnel);
			return new ResponseEntity<>(personnel, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/personnels/{id}")
	public ResponseEntity<String> deletePersonnelById(@PathVariable("id") Long id) {
		personnelRepository.deleteById(id);
		return new ResponseEntity<String>("pERSONNEL is deleted successfully.!", HttpStatus.OK);
	}
	
	





}
