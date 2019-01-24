package com.qa.soph.springblockbusters.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.soph.springblockbusters.exception.*;
import com.qa.soph.springblockbusters.model.springblockbustersModel;
import com.qa.soph.springblockbusters.repository.SpringblockbustersRepository;

@RestController
@RequestMapping("/api")

public class SpringblockbustersController {

	@Autowired
	SpringblockbustersRepository myRepository;
	
	// method to create a film
	@PostMapping("/film")
	public springblockbustersModel createFilm(@Valid @RequestBody springblockbustersModel mSDM) {
		return myRepository.save(mSDM);
	}
	
	// method to get a film
	@GetMapping("/film/{id}")
	public springblockbustersModel getFilmbyID(@PathVariable(value = "id")Long filmID) {
		return myRepository.findById(filmID).orElseThrow(()-> new ResourceNotFoundException("springblockbustersModel","id", filmID));
	}
	
	//method to get all films
	@CrossOrigin
	@GetMapping("/films")
	public List<springblockbustersModel> getAllFilms(){
		return myRepository.findAll();
	}
	 
	//method to update a film
	@PutMapping("/film/{id}")
	public springblockbustersModel updatePerson(@PathVariable(value = "id") Long filmID, @Valid @RequestBody springblockbustersModel filmDetails) {
		springblockbustersModel mSDM = myRepository.findById(filmID).orElseThrow(()-> new ResourceNotFoundException ("Film", "id", filmID));
		
		mSDM.setTitle(filmDetails.getTitle());
	
		
		springblockbustersModel updateData = myRepository.save(mSDM);
		return updateData;
	}
	
	// method to remove a film
	@DeleteMapping("/film/{id}")
	public ResponseEntity<?> deleteFilm(@PathVariable(value = "id") Long filmID){
		springblockbustersModel mSDM = myRepository.findById(filmID).orElseThrow(()-> new ResourceNotFoundException ("Film", "id", filmID));
	myRepository.delete(mSDM);
	return ResponseEntity.ok().build();
	}

}
