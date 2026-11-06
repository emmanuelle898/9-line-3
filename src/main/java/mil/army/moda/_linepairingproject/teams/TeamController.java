package mil.army.moda._linepairingproject.teams;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
