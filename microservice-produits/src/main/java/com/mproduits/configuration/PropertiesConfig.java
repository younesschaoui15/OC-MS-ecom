package com.mproduits.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Component;

@Component
@RefreshScope
@ConfigurationProperties(prefix = "ms-products")
public class PropertiesConfig {

    private int max_per_page;

    public int getMax_per_page() {
        return max_per_page;
    }

    public void setMax_per_page(int max_per_page) {
        this.max_per_page = max_per_page;
    }
}
