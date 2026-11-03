package mil.army.moda._linepairingproject.nineLine;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;


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
    @Column
    private Integer patientNumber;

    public NineLine (String location, String callSign, Integer patientNumber) {
        this.location = location;
        this.callSign = callSign;
        this.patientNumber = patientNumber;
    }

}
