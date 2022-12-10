package com.rh.project.repository;

import java.util.*;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rh.project.entity.*;





public interface PersonnelRepository extends JpaRepository<Personnel, Long> {
	Personnel findTopByOrderByIdDesc();
	@Query("select distinct p from Personnel p " +
            "left join fetch p.parent pp " +
            "left join fetch p.children ch " +
            "where pp is null")
    List<Personnel> findAll();
}
