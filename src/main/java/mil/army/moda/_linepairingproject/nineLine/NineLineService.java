package mil.army.moda._linepairingproject;

import lombok.AllArgsConstructor;
import mil.army.moda._linepairingproject.nineLine.NineLine;
import mil.army.moda._linepairingproject.nineLine.NineLineRepository;
import org.springframework.stereotype.Service;


@AllArgsConstructor
@Service
public class NineLineService {
    private final NineLineRepository nineLineRepository;

    public createNineLine(NineLine nineLine){
        return nineLineRepository.save(nineLine);
    }
}
