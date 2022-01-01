import React from 'react'
import {Task} from 'src/interfaces/Task';
import {Grid, Button} from 'semantic-ui-react';
import {useRouter} from 'next/router';
import TaskList from 'src/components/TaskList';

interface Props {
  tasks: Task[]
}

export default function index({tasks}: Props) {

  const router = useRouter();

  return (
    <>
      {
        tasks.length === 0 ? (
          <Grid columns={3} centered vertically="middle" style={{height: '70%'}}>
            <Grid.Row>
              <Grid.Column>
                <h1>No Tasks yet</h1>
                <Button onClick={() => {router.push('/tasks/new')}}>Create one</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ) : (
          <TaskList tasks={tasks} />
        )
      }
    </>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json()
  console.log(tasks)

  return {
    props: {
      tasks
    }
  }
}