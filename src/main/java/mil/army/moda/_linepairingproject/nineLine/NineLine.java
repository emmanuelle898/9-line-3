package mil.army.moda._linepairingproject.nineLine;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mil.army.moda._linepairingproject.nineLine.RequestStatus.RequestStatus;
import mil.army.moda._linepairingproject.nineLine.contamination.Contamination;
import mil.army.moda._linepairingproject.nineLine.marking.Marking;
import mil.army.moda._linepairingproject.nineLine.patientStatus.PatientStatus;
import mil.army.moda._linepairingproject.nineLine.presedence.Precedence;
import mil.army.moda._linepairingproject.nineLine.security.Security;
import mil.army.moda._linepairingproject.nineLine.specialEquipment.SpecialEquipment;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.Map;
import java.util.Set;


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
    @Column
    private Set<SpecialEquipment> specialEquipment;
    @Column
    private Integer litterPatient;
    @Column
    private Integer ambulatoryPatient;
    @Column
    private Security security;
    @Column
    private Set<Marking> markings;
    @Column
    private PatientStatus patientStatus;
    @Column
    private Contamination contamination;
    @Column
    private RequestStatus requestStatus;


}
