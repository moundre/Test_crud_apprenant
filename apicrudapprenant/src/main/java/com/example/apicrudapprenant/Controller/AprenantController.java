package com.example.apicrudapprenant.Controller;

import com.example.apicrudapprenant.Model.Apprenant;
import com.example.apicrudapprenant.ServiceImp.ApprenantServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@CrossOrigin("*")
@RequestMapping("/api/")
public class AprenantController {
    @Autowired
    ApprenantServiceImp appservimp;
    @PostMapping("saveapprenant")
    public Apprenant saveapprenant(@RequestBody Apprenant appre) {
        return appservimp.createapprenant(appre);
    }
    @PutMapping("putapprenant/{id}")
    public Apprenant updateapprenant(@RequestBody Apprenant appre, @PathVariable Long id) {
        return appservimp.updateapprenant(appre, id);
    }
    @GetMapping("allapprenant")
    public List<Apprenant> getallapprenant() {
        return appservimp.getallapprenant();
    }
    @GetMapping("detailapprenant/{id}")
    public Apprenant getapprenatByid(@PathVariable Long id) {
        return appservimp.getapprenatByid(id);
    }

    @DeleteMapping("deleteapprenant/{id}")
    public void deleteapprenantByid(@PathVariable Long id) {
        appservimp.deleteapprenantByid(id);

    }
}
