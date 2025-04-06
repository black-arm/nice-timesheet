'use client';
import React, {ReactElement, useState} from 'react';
import {UserCardProps} from "@/app/(base-template)/(pages)/add-users/model";
import UserCard from './components/user-card';
import AddUsersDialog from "@/app/(base-template)/(pages)/add-users/components/AddUsersDialog";
import {Button} from "@/shared/components/ui/button";

const users: UserCardProps[] = [
    {
        photoSrc: "https://ui.shadcn.com/avatars/shadcn.jpg",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        birthDate: "1990-01-01"
    },
    {
        photoSrc: "https://ui.shadcn.com/avatars/shadcn.jpg",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        birthDate: "1985-05-15"
    },
    {
        photoSrc: "https://ui.shadcn.com/avatars/shadcn.jpg",
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        birthDate: "1992-07-20"
    }
]

const AddUsers: React.FC = () => {

    const [openDialog, setOpenDialog] = useState(false);

  return (
        <div className="px-12 mt-4">
            <AddUsersDialog open={openDialog}
                            close={() => setOpenDialog(false)} />
            <div className="flex justify-end">
                <Button onClick={() => setOpenDialog(true)}>Add Users</Button>
            </div>
            { users.map((user: UserCardProps, index): ReactElement  => (
                <UserCard {...user} key={index} />
            ))}
        </div>
  );
};

export default AddUsers;