package mil.army.moda._linepairingproject.teams;

import org.junit.jupiter.api.MediaType;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.json.JsonMapper;
import static mil.army.moda._linepairingproject.teams.TeamBuilder.teamBuilder;


import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(TeamController.class)
class TeamControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    JsonMapper jsonMapper;
    @MockitoBean
    TeamService teamService;



    @Captor
    ArgumentCaptor<Team> captor = ArgumentCaptor.forClass(Team.class);

//    Team newTeam1= teamBuilder().withCallSign("1234").build();


    @Test
    void shouldGetAllTeams() throws Exception{
        var teamBuilder = List.of(teamBuilder().withCallSign("1234").build(), teamBuilder().withCallSign("2345").build());
        when(teamService.getAllTeams()).thenReturn(teamBuilder);

        mockMvc.perform(get("/api/teams"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].callSign").value("1234"))
                .andExpect(jsonPath("$[1].callSign").value("2345"))
                .andExpect(jsonPath("$", hasSize(2)));

        verify(teamService, only()).getAllTeams();


    }

    @Test
    void shouldSaveNewTeam() throws Exception{
        Team newTeam1= teamBuilder().withCallSign("1234").build();

        when(teamService.createNewTeam(any(Team.class))).thenReturn(newTeam1);
        mockMvc.perform(post("/api/teams")
                .contentType(String.valueOf(MediaType.APPLICATION_JSON))
                .content(jsonMapper.writeValueAsString(newTeam1)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.callSign").value("1234"));

        verify(teamService, times(1)).createNewTeam(captor.capture());
        assertThat(captor.getValue())
                .usingRecursiveComparison()
                .isEqualTo(newTeam1);
        verify(teamService, times(1)).createNewTeam(any(Team.class));



    }


}