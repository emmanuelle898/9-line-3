package mil.army.moda._linepairingproject.teams;

public class TeamBuilder {
    private Long id = 1L;
    private String callSign;

    public static TeamBuilder teamBuilder(){
        return new TeamBuilder();
    }

    public TeamBuilder withId(Long id){
        this.id=id;
        return this;

    }
    public TeamBuilder withCallSign(String callSign) {
        this.callSign = callSign;
        return this;
    }

    public Team build(){
        return new Team(this.id,this.callSign);
    }

}
