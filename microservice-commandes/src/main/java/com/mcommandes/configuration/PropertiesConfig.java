package com.mcommandes.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Component;

@Component
@RefreshScope
@ConfigurationProperties(prefix = "ms-orders")
public class PropertiesConfig {

    private int min_total_by_order;

    public int getMin_total_by_order() {
        return min_total_by_order;
    }

    public void setMin_total_by_order(int min_total_by_order) {
        this.min_total_by_order = min_total_by_order;
    }
}
