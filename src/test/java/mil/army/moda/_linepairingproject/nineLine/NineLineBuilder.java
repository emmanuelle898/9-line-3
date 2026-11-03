package mil.army.moda._linepairingproject.nineLine;

public class NineLineBuilder {
    private Long id;
    private String location = "location";
    private String callSign;
    private Integer patientNumber;




    public static NineLineBuilder request(){
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


    public NineLine build(){
        return new NineLine(this.id, this.location, this.callSign, this.patientNumber);
    }
}
