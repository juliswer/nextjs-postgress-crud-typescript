import React from 'react'
import {Card} from 'semantic-ui-react'
import {Task} from 'src/interfaces/Task';

interface Props {
    tasks: Task[]
}

export default function TaskList({tasks} : Props) {
    return (
        <Card.Group>
            {tasks.map((task) => (
                <Card key={task.id}>
                    <Card.Content>
                        <Card.Header>{task.title}</Card.Header>
                        <Card.Meta>{task.description}</Card.Meta>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>
    )
}