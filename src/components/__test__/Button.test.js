/* eslint-disable require-jsdoc, max-len */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {Button} from '../Button';

afterEach(cleanup);
Enzyme.configure({adapter: new Adapter()});

describe('Button', () => {
  const defaultVariant = 'default';
  const outlineVariant = 'outline';
  const textVariant = 'text';
  it('should render without crash', () => {
    render(<Button/>);
  });
  it('should render default button without crash', () => {
    render(<Button variant={defaultVariant}/>);
  });
  it('should render outline button without crash', () => {
    render(<Button variant={outlineVariant}/>);
  });
  it('should render text button without crash', () => {
    render(<Button variant={textVariant}/>);
  });
  it('should show `text` prop', () => {
    const wrapper = shallow(<Button variant={defaultVariant} text="text"/>);
    expect(wrapper.props().children.props.children[1]).toEqual('text');
  });
  it('should show `startIcon` prop', () => {
    const wrapper = shallow(<Button variant={defaultVariant} startIcon="lock"/>);
    expect(wrapper.props().children.props.children[0].props.children).toEqual('lock');
  });
  it('should show `endIcon` prop', () => {
    const wrapper = shallow(<Button variant={defaultVariant} endIcon="lock"/>);
    expect(wrapper.props().children.props.children[2].props.children).toEqual('lock');
  });
  it('should pass `color` prop to child', () =>{
    const wrapper = shallow(<Button variant={defaultVariant} color="danger"/>);
    expect(wrapper.props().children.props.specs.color).toEqual('danger');
  });
  it('should pass `size` prop to child', () => {
    const wrapper = shallow(<Button variant={defaultVariant} size="lg"/>);
    expect(wrapper.props().children.props.specs.size).toEqual('lg');
  });
  it('should pass `disabled` prop to child', () => {
    const wrapper = shallow(<Button variant={defaultVariant} disabled/>);
    expect(wrapper.props().children.props.specs.disabled);
  });
  it('should pass `disabledShadow` prop to child', () => {
    const wrapper = shallow(<Button variant={defaultVariant} disableShadow/>);
    expect(wrapper.props().children.props.specs.disableShadow);
  });
  it('should trigger onclick function', () => {
    const click = jest.fn();
    const {getByTestId} = render(
        <Button variant={defaultVariant} onClick={click}/>,
    );
    fireEvent.click(getByTestId('default_button'));
    expect(click).toBeCalled();
  });
  it('should pass `size` prop to disabled default button', () => {
    const wrapper = shallow(<Button variant={defaultVariant} disabled size='lg'/>);
    expect(wrapper.props().children.props.specs.size).toEqual('lg');
  });
  it('should pass `size` prop to disabled text button', () => {
    const wrapper = shallow(<Button variant={textVariant} disabled size='lg'/>);
    expect(wrapper.props().children.props.specs.size).toEqual('lg');
  });
});
