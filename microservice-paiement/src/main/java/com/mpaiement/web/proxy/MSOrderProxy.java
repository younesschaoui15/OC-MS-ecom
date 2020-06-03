package com.mpaiement.web.proxy;

import com.mpaiement.model.Commande;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@FeignClient(name = "ms-orders", url = "localhost:8081")
public interface MSOrderProxy {

    @GetMapping(value = "/commandes/{id}")
    Optional<Commande> recupererUneCommande(@PathVariable int id);

    @PostMapping(value = "/commandes/{id}")
    boolean payerCommande(@PathVariable int id);
}
