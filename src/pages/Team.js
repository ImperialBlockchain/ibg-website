import React from 'react';
import Main from '../layouts/Main';
import team from '../data/team';
import Card from '../components/Card';

const Team = (props) => (
  <Main
    title="Team"
    description="Team introduction page"
  >
    <section className='px-4 lg:px-20 lg:max-w-screen-lg py-2 pb-4'>
      <h1 className='text-4xl my-4 text-yellow-500'>Meet the commitee!</h1>
      <ul className={`${props.className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}>
        {team.map((s) => (
          <li key={s.name}>
            <Card
              name={s.name}
              imageLink={s.imageUrl}
              role={s.role}
              desc={s.desc}
            />
          </li>
        ))}
      </ul>
    </section>
  </Main>
);

export default Team;