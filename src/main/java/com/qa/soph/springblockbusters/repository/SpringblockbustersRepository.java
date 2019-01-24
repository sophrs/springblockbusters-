package com.qa.soph.springblockbusters.repository;

import org.springframework.stereotype.Repository;


import com.qa.soph.springblockbusters.model.springblockbustersModel;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface SpringblockbustersRepository extends JpaRepository<springblockbustersModel,Long> {

}
