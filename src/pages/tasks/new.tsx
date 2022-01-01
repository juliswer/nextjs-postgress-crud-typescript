import {ChangeEvent, useState} from 'react';
import {Button, Card, Form, Icon} from 'semantic-ui-react';
import {Task} from 'src/interfaces/Task';

export default function newPage() {

    const [task, setTask] = useState({
        
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value)
    }

    return (
        <>
            <Card>
                <Card.Content>
                    <Form>
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
