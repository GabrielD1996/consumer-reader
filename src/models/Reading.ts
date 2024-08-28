import { Schema, model, Document } from 'mongoose';

export enum MeasureType {
    WATER = 'WATER',
    GAS = 'GAS'
}

interface IReading extends Document {
    customer_code: string;
    measure_type: MeasureType;
    measure_value: number;
    image_url: string;
    measure_datetime: Date;
    has_confirmed: boolean;
}

const ReadingSchema = new Schema<IReading>({
    customer_code: { type: String, required: true },
    measure_type: { type: String, enum: MeasureType, required: true },
    measure_value: { type: Number, required: true },
    image_url: { type: String, required: true },
    measure_datetime: { type: Date, required: true },
    has_confirmed: { type: Boolean, default: false },
}, {
    timestamps: true,
});

const Reading = model<IReading>('Reading', ReadingSchema);

export default Reading;