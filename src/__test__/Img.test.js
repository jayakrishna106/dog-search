import { render, screen } from '@testing-library/react';
import { Img } from '../components/Img';

test('renders Img link By Alt Text', () => {
  render(<Img imageId={"S1fFlx5Em"}/>);
  const linkElement = screen.getByAltText(/Loading Image/i);
  expect(linkElement).toBeInTheDocument();
});


