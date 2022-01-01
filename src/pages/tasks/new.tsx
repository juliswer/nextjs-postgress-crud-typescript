import {ChangeEvent, useState} from 'react';
import {Button, Card, Form, Icon} from 'semantic-ui-react';
import { useRouter } from "next/router";
import {Task} from 'src/interfaces/Task';

export default function newPage() {

    const router = useRouter();

    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const createTask = async (task: Task) => {
        const response = await fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        const data = await response.json();
        console.log(data);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await createTask(task)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Card>
                <Card.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder="Write your title" name="title" onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" rows={2} placeholder="Write your description" onChange={handleChange}></textarea>
                        </Form.Field>
                        <Button>
                            <Icon name="save" />
                            Save
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        </>
    )
}
