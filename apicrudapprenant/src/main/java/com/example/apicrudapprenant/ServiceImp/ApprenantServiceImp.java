package com.example.apicrudapprenant.ServiceImp;

import com.example.apicrudapprenant.Model.Apprenant;
import com.example.apicrudapprenant.Repository.ApprenantRepository;
import com.example.apicrudapprenant.Service.ApprenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApprenantServiceImp implements ApprenantService {
    @Autowired
    ApprenantRepository ApprenantRepos;
    @Override
    public Apprenant createapprenant(Apprenant appre) {
        return ApprenantRepos.save(appre);
    }

    @Override
    public Apprenant updateapprenant(Apprenant appre, Long id) {
        Apprenant app = ApprenantRepos.findById(id).get();
        app.setNom(appre.getNom());
        app.setPrenom(appre.getPrenom());
        app.setEmail(appre.getEmail());
        app.setPassword(app.getPassword());
        app.setDatenaissance(appre.getDatenaissance());
        app.setLieunaissance(appre.getLieunaissance());
        return ApprenantRepos.save(appre);
    }

    @Override
    public List<Apprenant> getallapprenant() {
        return ApprenantRepos.findAll();
    }

    @Override
    public Apprenant getapprenatByid(Long id) {
        return ApprenantRepos.findById(id).get();
    }

    @Override
    public void deleteapprenantByid(Long id) {
        ApprenantRepos.deleteById(id);

    }
}
