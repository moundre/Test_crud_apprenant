package com.example.apicrudapprenant.Repository;

import com.example.apicrudapprenant.Model.Apprenant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprenantRepository  extends JpaRepository <Apprenant, Long> {
}
