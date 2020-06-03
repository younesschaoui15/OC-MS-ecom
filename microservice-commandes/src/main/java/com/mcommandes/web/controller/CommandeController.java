package com.mcommandes.web.controller;


import com.mcommandes.dao.CommandesDao;
import com.mcommandes.model.Commande;
import com.mcommandes.web.exceptions.CommandeNotFoundException;
import com.mcommandes.web.exceptions.ImpossibleAjouterCommandeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class CommandeController {

    @Autowired
    CommandesDao commandesDao;

    @PostMapping(value = "/commandes")
    public ResponseEntity<Commande> ajouterCommande(@RequestBody Commande commande) {
        try {
            Commande cmd = commandesDao.save(commande);
            return new ResponseEntity<>(cmd, HttpStatus.CREATED);
        } catch (Exception ex) {
            throw new ImpossibleAjouterCommandeException("Impossible d'ajouter cette commande");
        }
    }

    @PostMapping(value = "/commandes/{id}")
    public ResponseEntity<Boolean> payerCommande(@PathVariable int id) {
        Optional<Commande> commande = commandesDao.findById(id);
        if (!commande.isPresent())
            throw new CommandeNotFoundException("Cette commande n'existe pas");
        Commande cmd = commande.get();
        try {
            cmd.setCommandePayee(true);
            commandesDao.save(cmd);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/commandes")
    public ResponseEntity<List<Commande>> getAllOrders() {
        List<Commande> commandes = commandesDao.findAll();
        if (commandes.isEmpty())
            new ResponseEntity<>(commandes, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(commandes, HttpStatus.OK);
    }

    @GetMapping(value = "/commandes/{id}")
    public ResponseEntity<Optional<Commande>> recupererUneCommande(@PathVariable int id) {
        Optional<Commande> commande = commandesDao.findById(id);
        if (!commande.isPresent())
            throw new CommandeNotFoundException("Cette commande n'existe pas");

        return new ResponseEntity<>(commande, HttpStatus.OK);
    }
}
