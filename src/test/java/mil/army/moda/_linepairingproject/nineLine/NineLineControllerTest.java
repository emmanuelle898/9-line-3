package mil.army.moda._linepairingproject.nineLine;

import mil.army.moda._linepairingproject.nineLine.presedence.Precedence;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.json.JsonMapper;

import java.util.*;

import static mil.army.moda._linepairingproject.nineLine.NineLineBuilder.nineline;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(NineLineController.class)
class NineLineControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    JsonMapper jsonMapper;

    @MockitoBean
    NineLineService nineLineService;

    @Captor
    ArgumentCaptor<NineLine> captor = ArgumentCaptor.forClass(NineLine.class);


    @Test
    void shouldCreateNewNineLine() throws Exception {
        Map<Precedence, Integer> precedenceCounters = new EnumMap<>(Precedence.class) {{
            put(Precedence.CONVENIENCE, 2);
            put(Precedence.PRIORITY, 2);
            put(Precedence.ROUTINE, 1);
        }};
        var newNineLine = nineline().withId(1L).withLocation("your mom's house").withCallSign("1234")
                        .withPrecedence(precedenceCounters);
        when(nineLineService.createNineLine(any(NineLine.class))).thenReturn(newNineLine.build());
        // Act
        mockMvc.perform(post("/api/nineline")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonMapper.writeValueAsString(newNineLine.build())))
                // result matchers
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.location").value("your mom's house"))
                .andExpect(jsonPath("$.callSign").value("1234"))
                .andExpect(jsonPath("$.precedenceCounters.PRIORITY").value(2))
                .andExpect(jsonPath("$.precedenceCounters.ROUTINE").value(1))
                .andExpect(jsonPath("$.precedenceCounters.CONVENIENCE").value(2));

        // Assert
        verify(nineLineService, times(1)).createNineLine(captor.capture());
        assertThat(captor.getValue())
                .usingRecursiveComparison()
                .isEqualTo(newNineLine.build());
        verify(nineLineService, times(1)).createNineLine(any(NineLine.class));
    }

    @Test
    void shouldFetchAllNineLines() throws Exception {
        var nineLines = List.of(nineline().withLocation("your house").build(), nineline()
                .withLocation("my house")
                .build());
        when(nineLineService.getAllNineLines()).thenReturn(nineLines);


        mockMvc.perform(get("/api/nineline"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].location").value("your house"))
                .andExpect(jsonPath("$[1].location").value("my house"))
                .andExpect(jsonPath("$", hasSize(2)));

        verify(nineLineService, only()).getAllNineLines();

    }

}