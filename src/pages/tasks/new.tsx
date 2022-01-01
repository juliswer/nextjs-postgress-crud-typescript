import {ChangeEvent, useState, useEffect} from 'react';
import {Button, Card, Form, Grid, Icon, Confirm} from 'semantic-ui-react';
import { useRouter } from "next/router";
import {Task} from 'src/interfaces/Task';
import Layout from 'src/components/Layout'

export default function newPage() {

    const router = useRouter();

    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const [openConfirm, setOpenConfirm] = useState(false);

    const loadTask = async (id: string) => {
        const response = await fetch(`/api/tasks/${id}`);
        const data = await response.json();
        setTask(data)
    }

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

    const updateTask = async (task: Task) => {
        const response = await fetch(`/api/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        const data = await response.json();
        console.log(data);
    }

    const deleteTask = async (task: Task) => {
        const response = await fetch(`/api/tasks/${task.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        router.push('/')
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {id} = router.query

        if(id) {
            updateTask(task)
        } else {
            createTask(task)
        }
        router.push('/')
    }

    useEffect(() => {

        const {id} = router.query

        if(id) {
            loadTask(id)
        }
    }, [router.query])

    return (
        <Layout>
            <Grid centered columns={3} verticalAlign='middle' style={{height: '70%'}}>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Form onSubmit={handleSubmit}>
                                <Form.Field>
                                    <label htmlFor="title">Title</label>
                                    <input value={task.title} type="text" placeholder="Write your title" name="title" onChange={handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="description">Description</label>
                                    <textarea value={task.description} name="description" rows={2} placeholder="Write your description" onChange={handleChange}></textarea>
                                </Form.Field>
                                {router.query.id ? (
                                    <Button color="teal">
                                        <Icon name="exchange" />
                                        Update
                                    </Button>
                                ): (
                                    <Button color="primary">
                                        <Icon name="save" />
                                        Save
                                    </Button>
                                )}
                            </Form>
                        </Card.Content>
                    </Card>

                    <Button color="red" onClick={() => setOpenConfirm(true)}>
                        <Icon name="trash alternate" />
                        Delete
                    </Button>

                </Grid.Column>
            </Grid>
            <Confirm 
                header='Delete a task'
                content={`Are you sure you want to delete this task?`}
                open={openConfirm}
                onCancel={() => setOpenConfirm(false)}
                onConfirm={() => deleteTask(task)}
            />
        </Layout>
    )
}