import { Container } from "@chakra-ui/react";
import "./beneficiarios.css";

export const Beneficiarios = () => {
  return (
    <>
      <Container centerContent>
        <p class ="titulo">
          Beneficarios
        </p>

        <div class="beneficiario">
          <div class="beneficiario-form">
            <h3>Crear beneficiario</h3>
            <form action="">
              <div>
                <p>
                  <label for="cuenta">Cuenta o Contrato</label>
                  <input type="text" name="cuenta" id="cuenta"></input>
                </p>
                <p>
                  <label for="cedula"> Cedula</label>
                  <input type="text" name="cedula" id="cedula"></input>
                </p>
              </div>
              <div>
                <p>
                  <label for="alias">Alias</label>
                  <input type="text" name="alias" id="alias"></input>
                </p>
                <p>
                  <label for = "correo">Correo electronico</label>
                  <input type="text" name="correo" id="correo"></input>
                </p>
                
              </div>
        

                <button className="save" type="submit">Guardar</button>
             
            </form>
          </div>
        </div>
      </Container>
    </>
  );
} 