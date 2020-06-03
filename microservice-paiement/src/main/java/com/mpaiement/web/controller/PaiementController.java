package com.mpaiement.web.controller;

import com.mpaiement.dao.PaiementDao;
import com.mpaiement.model.Paiement;
import com.mpaiement.web.exceptions.PaiementExistantException;
import com.mpaiement.web.exceptions.PaiementImpossibleException;
import com.mpaiement.web.proxy.MSOrderProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class PaiementController {

    @Autowired
    PaiementDao paiementDao;
    @Autowired
    MSOrderProxy msOrderProxy;

    @PostMapping(value = "/paiement")
    public ResponseEntity<Map<Paiement, Boolean>> payerUneCommande(@RequestBody Paiement paiement) {
        //Vérifions s'il y a déjà un paiement enregistré pour cette commande
        Optional<Paiement> paiementExistant = paiementDao.findByidCommande(paiement.getIdCommande());
        if (paiementExistant.isPresent())
            throw new PaiementExistantException("Cette commande est déjà payée");

        //Enregistrer le paiement
        Paiement nouveauPaiement = paiementDao.save(paiement);

        //TODO Nous allons appeler le Microservice Commandes ici pour lui signifier que le paiement est accepté
        boolean isPaid = msOrderProxy.payerCommande(paiement.getIdCommande());

        if (nouveauPaiement == null)
            throw new PaiementImpossibleException("Erreur, impossible d'établir le paiement, réessayez plus tard");
        else if (!isPaid)
            throw new PaiementImpossibleException("Order payment is not updated!");

        HashMap<Paiement, Boolean> res = new HashMap<>();
        res.put(nouveauPaiement, isPaid);

        return new ResponseEntity<>(res, HttpStatus.CREATED);

    }


}
