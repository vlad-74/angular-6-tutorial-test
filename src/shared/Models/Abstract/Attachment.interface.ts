import { DocumentsTypes } from '../../../Main/Models/Const/DocumentsTypes.enum';

export interface ISortedAttachments {
    date: string;
    documents: IAttachment[];
}

export interface IAttachment {
    id: string;
    filename: string;
    mimeType: string;
    uploaded: string;
    fileTypeShortName?: DocumentsTypes;
    extension?: string;
    isLoading?: boolean;
}
