package mil.army.moda._linepairingproject.nineLine.presedence;

import jakarta.persistence.*;

@Entity
@Table(name="nineLine_precedence")
public class Precedence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column
    private String precedence;
}
