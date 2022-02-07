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
    one_year_dividend?: number,
    two_year_dividend?: number,
    three_year_dividend?: number,
    four_year_dividend?: number,
    five_year_dividend?: number,
    analysis? : StockAnalysis[]
};