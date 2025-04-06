
export type NTDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    closeButton?: boolean;
    submitButton?: {
        text: string;
        onClick: () => void;
        disabled?: boolean;
    };
    cancelButton?: {
        text: string;
        onClick: () => void;
        disabled?: boolean;
    };
}