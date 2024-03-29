1. useMutation
useQuery: chỉ dùng để fetching và reading data
trong khi useMutation có thể fetching, caching, and updating asynchronous data in React applications.

useQuery is for fetching data ("read"), whereas useMutation is for changing data ("write").

Những thứ trả về trong hàm useQuery {isLoading, isSuccess, data, error}
take in 2 arguments, first is the queryKey and second is the queryFunction

useEffect is like alarm, triggers on data changes

useQuery thì hợp với get method còn useMutation hợp với những cái còn lại