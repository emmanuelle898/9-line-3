package mil.army.moda._linepairingproject.nineLine;

import mil.army.moda._linepairingproject.nineLine.presedence.Precedence;

import java.util.Map;

public class NineLineBuilder {
    private Long id;
    private String location;
    private String callSign;
    private Map<Precedence, Integer> precedenceCounters;




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

    public NineLine build(){
        return new NineLine(this.id, this.location, this.callSign, this.precedenceCounters);
    }
}
