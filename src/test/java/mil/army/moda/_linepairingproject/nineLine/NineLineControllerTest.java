package mil.army.moda._linepairingproject.nineLine;

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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
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

    NineLine newNineLine;

    @BeforeEach
    void setUp() {
        newNineLine = new NineLine("your house");
        newNineLine.setId(1L);
        when(nineLineService.createNineLine(any(NineLine.class))).thenReturn(newNineLine);
    }

    @Test
    void shouldCreateNewNineLine() throws Exception {
        // Act
        mockMvc.perform(post("/api/nineline")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonMapper.writeValueAsString(newNineLine)))
                // result matchers
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.location").value("your house"));

        // Assert
        verify(nineLineService, only()).createNineLine(captor.capture());
        assertThat(captor.getValue()).usingRecursiveComparison().isEqualTo(newNineLine);
        verify(nineLineService, times(1)).createNineLine(any(NineLine.class));
    }

}