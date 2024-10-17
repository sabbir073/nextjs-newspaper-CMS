'use client'; // This tells Next.js to render this component on the client side

import { useEffect, useState } from 'react';

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  articles: Article[];
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users');
        const data = await res.json();

        if (data.success) {
          setUsers(data.data);
        } else {
          setError(data.error || 'Failed to fetch users');
        }
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name} ({user.email})</h2>
            <p>Joined on: {new Date(user.createdAt).toLocaleDateString()}</p>
            <h3>Articles:</h3>
            <ul>
              {user.articles.map((article) => (
                <li key={article.id}>
                  <strong>{article.title}</strong>: {article.content}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
