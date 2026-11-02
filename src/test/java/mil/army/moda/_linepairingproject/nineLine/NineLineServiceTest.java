package mil.army.moda._linepairingproject.nineLine;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class NineLineServiceTest {

    @Mock
    private NineLineRepository nineLineRepository;

    @InjectMocks
    NineLineService nineLineService;

    NineLine newNineLine;
    NineLine secondNineLine;
    NineLine thirdNineLine;
    List<NineLine> nineLines;

    @BeforeEach
    void setUp() {

        nineLines = new ArrayList<>();

        newNineLine = new NineLine("your house", "1234");
        newNineLine.setId(1L);
        secondNineLine = new NineLine("my house", "1234");
        secondNineLine.setId(2L);
        thirdNineLine = new NineLine("their house", "1234");
        thirdNineLine.setId(3L);
        nineLines.add(newNineLine);
        nineLines.add(secondNineLine);
        nineLines.add(thirdNineLine);

    }

    @Test
    void shouldSaveNewNineLine(){
        when(nineLineService.createNineLine(any(NineLine.class))).thenReturn(newNineLine);

        //Act
        when(nineLineRepository.save(newNineLine)).thenReturn(newNineLine);
        NineLine result = nineLineService.createNineLine(newNineLine);

        //Assert
        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getLocation()).isEqualTo("your house");
        assertThat(result.getCallSign()).isEqualTo("1234");
        verify(nineLineRepository, only()).save(newNineLine);


    }

    @Test
    void shouldGetAllNineLines(){
        when(nineLineRepository.findAll()).thenReturn(nineLines);

        List<NineLine> result = nineLineService.getAllNineLines();
        verify(nineLineRepository, only()).findAll();
        assertThat(result).isEqualTo(nineLines);

    }

}