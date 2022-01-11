import { StockAnalysis } from "./stockAnalysis";

export interface Stock {
    _id?: String,
    name?: String,
    is_index?: Boolean,
    market_standard?: String,
    expense_ratio?: number,
    dividend?: number,
    series?: String,
    about?: String,
    analysis? : StockAnalysis[]
};