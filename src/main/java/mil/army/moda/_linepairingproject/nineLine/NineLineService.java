package mil.army.moda._linepairingproject.nineLine;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@AllArgsConstructor
@Service
public class NineLineService {
    private final NineLineRepository nineLineRepository;

    public NineLine createNineLine(NineLine nineLine){
        return nineLineRepository.save(nineLine);
    }
}
