package com.mproduits.web.controller;

import com.mproduits.configuration.PropertiesConfig;
import com.mproduits.dao.ProductDao;
import com.mproduits.model.Product;
import com.mproduits.web.exceptions.ProductNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    ProductDao productDao;
    @Autowired
    PropertiesConfig propertiesConfig;

    // Affiche la liste de tous les produits disponibles
    @GetMapping(value = "/Produits")
    public Page<Product> listeDesProduits() {
        System.out.println(">>> maxRecordsPerPage: " + propertiesConfig.getMax_per_page());
        Pageable paging = PageRequest.of(0, propertiesConfig.getMax_per_page(), Sort.by("prix"));
        Page<Product> products = productDao.findAll(paging);

        if (products.isEmpty())
            throw new ProductNotFoundException("Aucun produit n'est disponible à la vente");

        return products;

    }

    //Récuperer un produit par son id
    @GetMapping(value = "/Produits/{id}")
    public ResponseEntity<Optional<Product>> recupererUnProduit(@PathVariable int id) {

        Optional<Product> product = productDao.findById(id);

        if (!product.isPresent())
            throw new ProductNotFoundException("Le produit correspondant à l'id " + id + " n'existe pas");

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    //Récuperer un produit par son id
    @DeleteMapping(value = "/Produits/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id) {
        try {
            productDao.deleteById(id);
            return new ResponseEntity<>("Product deleted", HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>("Product not deleted", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Récuperer un produit par son id
    @PostMapping(value = "/Produits")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        try {
            Product p = productDao.save(product);
            return new ResponseEntity<>(p, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

