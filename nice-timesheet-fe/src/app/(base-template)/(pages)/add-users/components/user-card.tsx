import React from 'react';
import { Trash, Edit } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { UserCardProps } from '../model';



const UserCard: React.FC<UserCardProps> = ({ photoSrc, firstName, lastName, email, birthDate }: UserCardProps) => {
    return (
        <Card className="p-4 border rounded-lg shadow-md w-full my-4">
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={photoSrc} alt={`${firstName} ${lastName}`} className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h2 className="text-lg font-bold">{firstName} {lastName}</h2>
                            <p className="text-sm text-gray-600">{email}</p>
                            <p className="text-sm text-gray-600">{birthDate}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button size="icon" variant="outline">
                            <Edit />
                        </Button>
                        <Button size="icon" variant="outline">
                            <Trash />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserCard;