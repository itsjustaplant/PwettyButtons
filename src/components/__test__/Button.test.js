/* eslint-disable require-jsdoc, max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {Button} from '../Button';

afterEach(cleanup);
Enzyme.configure({adapter: new Adapter()});

describe('Button', () => {
  const variant = 'default';
  it('should render without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button/>, div);
  });
  it('should show `text` prop', () => {
    const wrapper = shallow(<Button variant={variant} text="text"/>);
    expect(wrapper.props().children.props.children[1]).toEqual('text');
  });
  it('should show `startIcon` prop', () => {
    const wrapper = shallow(<Button variant={variant} startIcon="lock"/>);
    expect(wrapper.props().children.props.children[0].props.children).toEqual('lock');
  });
  it('should show `endIcon` prop', () => {
    const wrapper = shallow(<Button variant={variant} endIcon="lock"/>);
    expect(wrapper.props().children.props.children[2].props.children).toEqual('lock');
  });
  it('should pass `color` prop to child', () =>{
    const wrapper = shallow(<Button variant={variant} color="danger"/>);
    expect(wrapper.props().children.props.specs.color).toEqual('danger');
  });
  it('should pass `size` prop to child', () => {
    const wrapper = shallow(<Button variant={variant} size="lg"/>);
    expect(wrapper.props().children.props.specs.size).toEqual('lg');
  });
  it('should pass `disabled` prop to child', () => {
    const wrapper = shallow(<Button variant={variant} disabled/>);
    expect(wrapper.props().children.props.specs.disabled);
  });
  it('should pass `disabledShadow` prop to child', () => {
    const wrapper = shallow(<Button variant={variant} disableShadow/>);
    expect(wrapper.props().children.props.specs.disableShadow);
  });
  it('should trigger onclick function', () => {
    const click = jest.fn();
    const {getByTestId} = render(
        <Button variant={variant} onClick={click}/>,
    );
    fireEvent.click(getByTestId('default_button'));
    expect(click).toBeCalled();
  });
});
