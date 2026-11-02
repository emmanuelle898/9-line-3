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
    private String callSign;
    @Column
    private String location;

    public NineLine (String location, String callSign) {
        this.location = location;
        this.callSign = callSign;
    }

}
