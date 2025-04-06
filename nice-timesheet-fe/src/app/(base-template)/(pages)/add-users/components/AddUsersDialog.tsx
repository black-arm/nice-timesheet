'use client';
import { Input } from '@/shared/components/ui/input';
import {NTDialog} from "@/shared/components/ui/NTDialog";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/components/ui/form";
import {useForm} from "react-hook-form";
import {z, ZodAny, ZodDate, ZodOptional, ZodString} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/shared/components/ui/button";
import {useEffect} from "react";
import {DatePicker} from "@/shared/components/ui/datepicker";


type UserFormSchema = {
    firstname: ZodString;
    lastname: ZodString;
    email: ZodString;
    birthdate: ZodDate;
    //photo: ZodOptional<ZodAny>;
}

const userFormSchema = z.object<UserFormSchema>({
    firstname: z.string({ message: 'Firstname is required'})
        .min(3, { message: "Firstname must be at least 3 characters."}),
    lastname: z.string({ message: 'Lastname is required'})
        .min(3, { message: 'Lastname must be at least 3 characters.'}),
    email: z.string({ message: 'Email is required.'})
        .email({ message: 'Email format is invalid'}),
    birthdate: z.date({ message: 'Birthdate is required.'}),
    //photo: z.any().optional()
})

const AddUsersDialog =
    ({ open, close }: { open: boolean, close: () => void }) => {

    const addUserForm = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
    });

    useEffect(() => {
        if(!open){
            addUserForm.reset();
        }
    }, [open]);

    const onSubmit = (data: z.infer<typeof userFormSchema>) => {
        console.log(data);
    }

    return (
        <NTDialog title="Add Users" open={open} onOpenChange={close}>
            <Form {...addUserForm}>
                <form onSubmit={addUserForm.handleSubmit(onSubmit)}>
                    <div className="flex gap-4">
                        <div className='basis-1/5'>
                            photo
                        </div>
                        <div className='basis-4/5'>
                            <div className="flex gap-4 w-full mb-8">
                                <FormField name="firstname"
                                           control={addUserForm.control}
                                           render={({field, fieldState}) =>(
                                    <FormItem className="w-full">
                                        <FormLabel>Firstname</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John" {...field}  />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField name="lastname"
                                           control={addUserForm.control}
                                           render={({field, fieldState}) =>(
                                    <FormItem className="w-full">
                                        <FormLabel>Lastname</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe"  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                            <div className="flex gap-4 mb-8">
                                <FormField name="email"
                                           control={addUserForm.control}
                                           render={({field}) =>(
                                               <FormItem className="w-full">
                                                   <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input  {...field}  placeholder="johnDoe@example.com" type="email" />
                                                    </FormControl>
                                                   <FormMessage />
                                               </FormItem>
                                           )}
                                />
                                <FormField name="birthdate"
                                           control={addUserForm.control}
                                           render={({field}) =>(
                                               <FormItem className="w-full">
                                                   <FormLabel>Birthdate</FormLabel>
                                                    <FormControl>
                                                        <DatePicker onChange={field.onChange} value={field.value} />
                                                    </FormControl>
                                                   <FormMessage />
                                               </FormItem>
                                           )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Button variant="secondary"
                                onClick={() => {
                                    addUserForm.reset();

                                }}
                                type="reset">Reset</Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>

            </Form>

        </NTDialog>
    );
};

export default AddUsersDialog;