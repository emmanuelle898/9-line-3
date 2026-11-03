package mil.army.moda._linepairingproject.nineLine;

import mil.army.moda._linepairingproject.nineLine.presedence.Precedence;

public class NineLineBuilder {
    private Long id;
    private String location;
    private String callSign;
    private Integer patientNumber;

    private Precedence precedence;




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

    public NineLineBuilder withPatientNumber( Integer patientNumber){
        this.patientNumber=patientNumber;
        return this;
    }
    public NineLineBuilder withPrecedence(Precedence precedence){
        this.precedence=precedence;
        return this;
    }


    public NineLine build(){
        return new NineLine(this.id, this.location, this.callSign, this.patientNumber, this.precedence);
    }
}
