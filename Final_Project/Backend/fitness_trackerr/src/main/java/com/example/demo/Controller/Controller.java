package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Entityy;
import com.example.demo.Repository.Repository;

@RestController
@RequestMapping("/hw")
@CrossOrigin(origins = "*") 

public class Controller {
	@Autowired
    private Repository applicantRepository;

    @PostMapping("/save")
    public Entityy saveApplicant(@RequestBody Entityy applicant) {
        return applicantRepository.save(applicant);
    }
    @GetMapping("/get")
    public List<Entityy> getAllApplicants() {
        return applicantRepository.findAll();
    }

}
