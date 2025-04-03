'use client';
import React, { useState } from 'react';
import {
    Dialog, DialogTrigger, DialogContent,
    DialogTitle, DialogDescription, DialogClose
} from '@/shared/components/ui/dialog';
import { Button } from '@/shared/components/ui/button';

const AddUsersDialog = () => {
    const [users, setUsers] = useState<string[]>(['']);

    const handleUserChange = (index: number, value: string) => {
        const newUsers = [...users];
        newUsers[index] = value;
        setUsers(newUsers);
    };

    const addUserField = () => {
        setUsers([...users, '']);
    };

    const handleSubmit = () => {
        // Handle the submit logic here
        console.log('Users:', users);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Users</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Add Users</DialogTitle>
                <DialogDescription>
                    Enter the details of the users you want to add.
                </DialogDescription>
                {users.map((user, index) => (
                    <input
                        key={index}
                        type="text"
                        value={user}
                        onChange={(e) => handleUserChange(index, e.target.value)}
                        placeholder={`User ${index + 1}`}
                        className="mb-2 p-2 border rounded"
                    />
                ))}
                <Button variant="secondary" onClick={addUserField}>
                    Add Another User
                </Button>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
                <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default AddUsersDialog;