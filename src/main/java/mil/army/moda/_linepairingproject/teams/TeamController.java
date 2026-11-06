package mil.army.moda._linepairingproject.teams;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
@RestController
@RequestMapping("/api/teams")
public class TeamController {
    private final TeamService teamService;

    @GetMapping
    public List<Team> getAllTeams(){
        return teamService.getAllTeams();
    }

    @PostMapping
    public ResponseEntity<Team> createNewTeam(@RequestBody Team team){
        Team newTeam = teamService.createNewTeam(team);
        return new ResponseEntity<>(newTeam, HttpStatus.CREATED);
    }

}
