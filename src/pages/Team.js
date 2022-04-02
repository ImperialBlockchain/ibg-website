import React from 'react';

import Main from '../layouts/Main';
import team from '../data/team';
import Card from '../components/Card';

const Team = (props) => (
  <Main
    description={'Team introduction page'}
  >
    <div className='mx-auto px-4 lg:px-20 lg:max-w-screen-lg'>
      <h1 className='text-4xl mb-4'>Meet the commitee!</h1>
      <ul className={`${props.className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}>
        {team.map((s) => (
          <li key={s.name}>
            <Card
              name={s.name}
              imageLink={s.imageLink}
              role={s.role}
              desc={s.desc}
            />
          </li>
        ))}
      </ul>
    </div>
  </Main>
);

export default Team;