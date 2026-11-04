package mil.army.moda._linepairingproject.nineLine;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mil.army.moda._linepairingproject.nineLine.presedence.Precedence;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.Map;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="NineLine")
public class NineLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String location;
    @Column
    private String callSign;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name= "precedence_counters", columnDefinition = "jsonb")
    private Map<Precedence, Integer> precedenceCounters;

    public NineLine(Map<Precedence, Integer> precedenceCounters) {
        this.precedenceCounters = precedenceCounters;
    }

    public NineLine (String location, String callSign, Map<Precedence, Integer> precedenceCounters) {
        this.location = location;
        this.callSign = callSign;
        this.precedenceCounters = precedenceCounters;
    }

}
