import {Button, Card, Form, Icon} from 'semantic-ui-react';

export default function newPage() {
    return (
        <div>
            <Card>
                <Card.Content>
                    <Form>
                        <Form.Field>
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder="Write your title" name="title" />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" rows={2} placeholder="Write your description"></textarea>
                        </Form.Field>
                        <Button>
                            <Icon name="save" />
                            Save
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}
