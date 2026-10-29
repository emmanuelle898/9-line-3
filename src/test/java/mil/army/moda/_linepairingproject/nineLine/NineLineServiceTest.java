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


    @BeforeEach
    void setUp() {
        //MockitoAnnotations.openMocks(this);
        newNineLine = new NineLine("your house");
        newNineLine.setId(1L);
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