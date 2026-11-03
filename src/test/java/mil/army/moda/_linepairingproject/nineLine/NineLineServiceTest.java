package mil.army.moda._linepairingproject.nineLine;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static mil.army.moda._linepairingproject.nineLine.NineLineBuilder.nineline;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class NineLineServiceTest {

    @Mock
    private NineLineRepository nineLineRepository;

    @InjectMocks
    NineLineService nineLineService;

    @Test
    void shouldSaveNewNineLine(){
        var newNineLine = nineline().withId(1L).withLocation("your house").withCallSign("1234")
                .withPatientNumber(1).build();

        //Act
        when(nineLineRepository.save(newNineLine)).thenReturn(newNineLine);
        NineLine result = nineLineService.createNineLine(newNineLine);

        //Assert
        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getLocation()).isEqualTo("your house");
        assertThat(result.getCallSign()).isEqualTo("1234");
        assertThat(result.getPatientNumber()).isEqualTo(1);
        verify(nineLineRepository, only()).save(newNineLine);


    }

    @Test
    void shouldGetAllNineLines(){
        var nineLines= List.of(nineline().build(),nineline().build());
        when(nineLineRepository.findAll()).thenReturn(nineLines);

        List<NineLine> result = nineLineService.getAllNineLines();
        verify(nineLineRepository, only()).findAll();
        assertThat(result).isEqualTo(nineLines);

    }

}