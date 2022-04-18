import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IFoodProps } from '../../types';
import { FormHandles, SubmitHandler } from '@unform/core';

//interface
interface IModalEditFood {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: IFoodProps | undefined;
  handleUpdateFood: (food: IFoodProps) => void;
}
//function
export function ModalEditFood({ isOpen, setIsOpen, handleUpdateFood, editingFood }: IModalEditFood) {
  const formRef = createRef<FormHandles>();

  const handleSubmit: SubmitHandler<IFoodProps> = async (data) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
