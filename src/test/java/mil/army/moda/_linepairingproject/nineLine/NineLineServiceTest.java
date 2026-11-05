package mil.army.moda._linepairingproject.nineLine;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static mil.army.moda._linepairingproject.nineLine.NineLineBuilder.nineline;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class  NineLineServiceTest {

    @Mock
    private NineLineRepository nineLineRepository;

    @InjectMocks
    NineLineService nineLineService;

    NineLine newNineLine;


    @BeforeEach
    void setUp() {

        newNineLine = nineline().withLocation("your house").build();

    }

    @Test
    void shouldSaveNewNineLine(){
        //Act
        when(nineLineRepository.save(newNineLine)).thenReturn(newNineLine);
        NineLine result = nineLineService.createNineLine(newNineLine);

        //Assert
        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getLocation()).isEqualTo("your house");
        verify(nineLineRepository, only()).save(newNineLine);


    }


}