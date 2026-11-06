package mil.army.moda._linepairingproject.teams;

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

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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


}