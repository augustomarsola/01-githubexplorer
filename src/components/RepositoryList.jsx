import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: 'profile',
  description: 'user profile',
  link: 'https://github.com/augustomarsola',
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/augustomarsola/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, []);

  console.log(repositories);
  
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}