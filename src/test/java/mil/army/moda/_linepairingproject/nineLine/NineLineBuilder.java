package mil.army.moda._linepairingproject.nineLine;

import jakarta.persistence.Column;
import mil.army.moda._linepairingproject.nineLine.marking.Marking;
import mil.army.moda._linepairingproject.nineLine.presedence.Precedence;
import mil.army.moda._linepairingproject.nineLine.security.Security;
import mil.army.moda._linepairingproject.nineLine.specialEquipment.SpecialEquipment;

import java.util.Map;
import java.util.Set;

public class NineLineBuilder {
    private Long id;
    private String location;
    private String callSign;
    private Map<Precedence, Integer> precedenceCounters;
    private Set<SpecialEquipment> specialEquipment;
    private Integer litterPatient;
    private Integer ambulatoryPatient;
    private Security security;
    private Set<Marking> markings;

    public static NineLineBuilder nineline(){
        return new NineLineBuilder();
    }
    public NineLineBuilder withId(Long id){
        this.id=id;
        return this;
    }
    public NineLineBuilder withLocation(String location){
        this.location=location;
        return this;
    }
    public NineLineBuilder withCallSign(String callSign){
        this.callSign=callSign;
        return this;
    }

    public NineLineBuilder withPrecedence(Map<Precedence, Integer> precedenceCounters){
        this.precedenceCounters =  precedenceCounters;
        return this;
    }

    public NineLineBuilder withSpecialEquipment(Set<SpecialEquipment> specialEquipment){
        this.specialEquipment = specialEquipment;
        return this;
    }

    public NineLineBuilder withLitterPatient(Integer litterPatient){
        this.litterPatient = litterPatient;
        return this;
    }
    public NineLineBuilder withAmbulatoryPatient(Integer ambulatoryPatient){
        this.ambulatoryPatient = ambulatoryPatient;
        return this;
    }
    public NineLineBuilder withSecurity(Security security){
        this.security = security;
        return this;
    }
    public NineLineBuilder withMarking(Set<Marking> markings){
        this.markings = markings;
        return this;
    }

    public NineLine build(){
        return new NineLine(this.id, this.location, this.callSign, this.precedenceCounters,
                this.specialEquipment, this.litterPatient, this.ambulatoryPatient, this.security, this.markings);
    }
}
