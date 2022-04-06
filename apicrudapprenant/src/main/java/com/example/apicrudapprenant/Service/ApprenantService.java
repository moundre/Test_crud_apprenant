package com.example.apicrudapprenant.Service;

import com.example.apicrudapprenant.Model.Apprenant;

import java.util.List;

public interface ApprenantService {
    public  Apprenant createapprenant(Apprenant appre);
    public  Apprenant updateapprenant(Apprenant appre, Long id);
    public  List<Apprenant> getallapprenant();
    public  Apprenant getapprenatByid(Long id);
    public  void  deleteapprenantByid(Long id);
}
