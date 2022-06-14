import { useQuery } from "react-query";

export function useData_inMyLib() {
  const res = useQuery('data', () => fetch('https://reqres.in/api/users?page=2').then(r => r.json()), { suspense: true });
  return res.data;
}
