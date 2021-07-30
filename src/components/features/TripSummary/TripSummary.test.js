import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate a proper link', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId}/>);

    const renderedLink = component.find('.link').prop('to');
    expect({renderedLink}).toEqual(`/trip/${{expectedId}}`);
  });
  it('should have proper "src" and "alt" props', () => {
    const expectedProp = 'lorem ipsum';
    const component = shallow(<TripSummary src={expectedProp} alt={expectedProp}/>);

    const renderedSrc = component.find(<img/>).prop('src');
    const renderedAlt = component.find(<img/>).prop('alt');
    expect({renderedSrc}).toEqual({expectedProp});
    expect({renderedAlt}).toEqual({expectedProp});
  });
  it('should have proper "name", "cost" and "days" props', () => {
    const expectedProp = 'lorem ipsum';
    const component = shallow(<TripSummary name={expectedProp} cost={expectedProp} days={expectedProp}/>);

    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details span:first-of-type').text();
    const renderedCost = component.find('.details span:last-of-type').text();
    expect({renderedName}).toEqual({expectedProp});
    expect({renderedDays}).toEqual(`${{expectedProp}} days`);
    expect({renderedCost}).toEqual(`from ${{expectedProp}}`);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should generate proper spans', () => {
    const tags = ['abc', 'def', 'ghi'];
    const component = shallow(<TripSummary tags={tags}/>);

    const renderedSpan1 = component.find('.tag').at(0).text();
    const renderedSpan2 = component.find('.tag').at(1).text();
    const renderedSpan3 = component.find('.tag').at(2).text();

    expect(renderedSpan1).toEqual(tags[0]);
    expect(renderedSpan2).toEqual(tags[1]);
    expect(renderedSpan3).toEqual(tags[2]);
  });
  it('should throw error without tags prop', () => {
    expect(() => shallow(<TripSummary tags={false}/>)).toThrow();

  });
});