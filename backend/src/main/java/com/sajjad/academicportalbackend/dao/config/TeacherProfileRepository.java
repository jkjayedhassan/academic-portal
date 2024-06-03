package com.sajjad.academicportalbackend.dao.config;

import com.sajjad.academicportalbackend.model.config.TeacherProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import com.sajjad.academicportalbackend.dao.super_classes.CrudDao;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;

@org.springframework.stereotype.Repository
public interface TeacherProfileRepository extends JpaRepository<TeacherProfile, Long>, CrudDao<TeacherProfile, Long> {

    @Modifying
    @Query(value = "UPDATE TeacherProfile e " +
            "SET e.active = false, e.modifiedBy = :modifiedBy, e.modifiedDate = :modifiedDate " +
            "where e.id = :id")
    int softDeleteById(@Param("id") Long id, @Param("modifiedBy") String modifiedBy, @Param("modifiedDate") LocalDateTime modifiedDate);

}