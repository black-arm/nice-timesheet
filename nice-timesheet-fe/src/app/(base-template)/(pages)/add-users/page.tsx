import React, {ReactElement} from 'react';
import {UserCardProps} from "@/app/(base-template)/(pages)/add-users/model";
import UserCard from './components/user-card';
import AddUsersDialog from "@/app/(base-template)/(pages)/add-users/components/AddUsersDialog";

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
  return (
    <>
        <AddUsersDialog />
        <div className="p-12">
            { users.map((user: UserCardProps, index): ReactElement  => (
                <UserCard {...user} key={index} />
            ))}
        </div>
    </>
  );
};

export default AddUsers;