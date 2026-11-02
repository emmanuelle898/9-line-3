package mil.army.moda._linepairingproject.nineLine;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class NineLineService {
    private final NineLineRepository nineLineRepository;

    public NineLine createNineLine(NineLine nineLine){
        return nineLineRepository.save(nineLine);
    }

    public List<NineLine> getAllNineLines(){
        return nineLineRepository.findAll();
    }
}
