package mil.army.moda._linepairingproject.teams;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import static mil.army.moda._linepairingproject.teams.TeamBuilder.teamBuilder;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TeamServiceTest {

    @Mock
    private TeamRepository teamRepository;

    @InjectMocks
    TeamService teamService;

    Team newTeam;




    @Test
    void  shouldGetAllTeams(){
        Team newTeam1= teamBuilder().withCallSign("1234").build();
        Team newTeam2= teamBuilder().withCallSign("2345").build();

        List<Team> allTeams = new ArrayList<>(List.of(newTeam1, newTeam2));


        when(teamRepository.findAll()).thenReturn(allTeams);

        List<Team> results = teamService.getAllTeams();

        verify(teamRepository, only()).findAll();
        assertThat(results).isEqualTo(allTeams);
    }

    @Test
    void shouldCreateNewTeam(){
        Team newTeam1= teamBuilder().withId(1L).withCallSign("1234").build();

        when(teamRepository.save(newTeam1)).thenReturn(newTeam1);
         Team result = teamService.createNewTeam(newTeam1);

        assertThat(result.getId()).isEqualTo(1L);
         assertThat(result.getCallSign()).isEqualTo("1234");
         verify(teamRepository, only()).save(newTeam1);


    }

}