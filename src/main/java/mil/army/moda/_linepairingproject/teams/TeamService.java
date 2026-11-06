package mil.army.moda._linepairingproject.teams;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TeamService {
    private final TeamRepository teamRepository;

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }


    public Team createNewTeam(Team team) {
        return teamRepository.save(team);

    }
}



