'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle
} from "@/shared/components/ui/dialog";
import React from "react";
import {NTDialogProps} from "@/shared/model/NTDialogProps";

export const NTDialog = (props: NTDialogProps) => {

    return (
        <Dialog open={props.open} onOpenChange={props.onOpenChange}>
            <DialogContent className="w-full lg:max-w-[1200px] md:max-w-[600px]">
                <DialogTitle>{props.title}</DialogTitle>
                <DialogDescription>
                    {props.description}
                </DialogDescription>
                { props.children }
            </DialogContent>
        </Dialog>
    )
}