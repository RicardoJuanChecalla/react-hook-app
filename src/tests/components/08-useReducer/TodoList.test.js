import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoList } from "../../../components/08-useReducer/TodoList";

describe('Pruebas en  <TodoList/>', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(
        <TodoList 
            todos={demoTodos} 
            handleToggle={handleToggle} 
            handleDelete={handleDelete} 
        />
    ); 
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
  });
  test('debe de tener dos elementos <TodoList/>', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
  });
  
});
