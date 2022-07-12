import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import SortSelector from '../components/SortSelector/SortSelector';
import Table from '../components/Table/Table';

const initialState = [
  { id: 1, value: 100 },
  { id: 2, value: 400 },
  { id: 3, value: 200 },
  { id: 4, value: 500 },
  { id: 5, value: 300 },
];

const sortOptions = [
  { value: 'ascending', label: 'By ascending' },
  { value: 'descending', label: 'By descending' },
];

export default function TablePage() {
  const [expenses, setExpenses] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  //---first option how to get url params
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const sortOrder = params.sortBy ?? 'ascending';

  // ---second option how get url params
  // const sortOrder = searchParams.get('sortBy') ?? 'ascending';

  // ---third option how get url params
  // const sortOrder =
  //   new URLSearchParams(location.search).get('sortBy') ?? 'ascending';

  const handleOptionChange = value => {
    navigate({ ...location, search: `sortBy=${value}` });
  };

  useEffect(() => {
    if (location.search !== '') return;
    navigate({ ...location, search: 'sortBy=ascending' });
  }, [location, navigate]);

  useEffect(() => {
    setExpenses(state =>
      [...state].sort((a, b) => {
        return sortOrder === 'ascending'
          ? a.value - b.value
          : b.value - a.value;
      })
    );
  }, [sortOrder]);

  return (
    <>
      <SortSelector
        options={sortOptions}
        value={sortOrder}
        onChange={handleOptionChange}
      />
      <Table items={expenses} />
    </>
  );
}
