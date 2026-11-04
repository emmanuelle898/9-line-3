package mil.army.moda._linepairingproject.nineLine;

import mil.army.moda._linepairingproject.nineLine.contamination.Contamination;
import mil.army.moda._linepairingproject.nineLine.marking.Marking;
import mil.army.moda._linepairingproject.nineLine.patientStatus.PatientStatus;
import mil.army.moda._linepairingproject.nineLine.presedence.Precedence;
import mil.army.moda._linepairingproject.nineLine.security.Security;
import mil.army.moda._linepairingproject.nineLine.specialEquipment.SpecialEquipment;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
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
        //MockitoAnnotations.openMocks(this);
        Map<Precedence, Integer> precedenceCounters = new EnumMap<>(Precedence.class) {{
            put(Precedence.CONVENIENCE, 2);
            put(Precedence.PRIORITY, 2);
            put(Precedence.ROUTINE, 1);
        }};
        Set<SpecialEquipment> specialEquipment = new HashSet<SpecialEquipment>();
        specialEquipment.add(SpecialEquipment.HOIST);
        specialEquipment.add(SpecialEquipment.VENTILATOR);

        Set<Marking> markings = new HashSet<Marking>();
        markings.add(Marking.NONE);
        newNineLine = new NineLine(3L,"32UPA1234567890","Killer 1",precedenceCounters,specialEquipment,
                2, 3, Security.NO_THREAT, markings, PatientStatus.NON_US_MILITARY, Contamination.NONE);
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