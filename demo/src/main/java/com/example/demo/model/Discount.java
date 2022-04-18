package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Discount {

    @Id
    @SequenceGenerator(name = "discountSeqGen", sequenceName = "discountSeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "discountSeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "period_id", referencedColumnName = "id")
    private Period period;

    @Column(name = "reduced_price", unique = false, nullable = false)
    private int reducedPrice;

    @Column(name = "is_acitve", unique = false, nullable = false)
    private boolean isActive;

}
