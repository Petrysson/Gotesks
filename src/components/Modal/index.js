import { Button } from '../button'
import { FormGroup } from './FormGroup'

import './Modal.css'

export function Modal({closeModal}){
    return(
        <div className='modal-background'>
            <article className='modal-container'>
                <h2 className='title-modal'>Criar uma nova tarefa</h2>
                
                <form>

                    <FormGroup 
                        type="text"
                        id="description"
                        placeholder="descrição"
                        value=""
                        onChange={()=> {}}
                        label="Descrição da tarefa"
                    />

                    <FormGroup 
                        type="date"
                        id="Data"
                        value=""
                        onChange={()=> {}}
                        label="Data"
                    />

                    <div className='buttons-modal'>
                        <Button
                          onClick={() => closeModal()}
                          className="btn-cancel"
                          title='Cancelar'
                        />

                        <Button
                          onClick={() => {}}
                          className="btn-save"
                          title='Salvar'
                        />
                    </div>

                </form>
            </article>
        </div>
    )
}