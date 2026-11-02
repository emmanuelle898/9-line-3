package mil.army.moda._linepairingproject.nineLine;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/nineline")
public class NineLineController {
    private final NineLineService nineLineService;

    @PostMapping
    public ResponseEntity<NineLine> createNineLine(@RequestBody NineLine nineLine){
       NineLine newNineLine = nineLineService.createNineLine(nineLine);
       return  new ResponseEntity<>(newNineLine, HttpStatus.CREATED);
    }

    @GetMapping
    public List<NineLine> getAllNineLines(){
//        List<NineLine> nineLines = nineLineService.getAllNineLines();
//        return new ResponseEntity<>(nineLines, HttpStatus.OK);
        return nineLineService.getAllNineLines();
    }
}
