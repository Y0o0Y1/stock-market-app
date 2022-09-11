import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TickerCard from './../TickerCard';

test('Expect to see Company card with it`s Ticker, Name & Currency ', async () => {
    // ARRANGE
    render(<TickerCard name={"Apple"} ticker={"AAPL"} currency_name={"USD"} />)

    // ASSERT
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('AAPL')).toBeInTheDocument()
    expect(screen.getByText('USD')).toBeInTheDocument()
})