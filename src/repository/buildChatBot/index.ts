import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';

import { SuccessResponse } from '../type';
import { BotPayload, BotDataResponse, ScrapingURLPayload } from './type';
import Cookies from 'universal-cookie';


export const createBotTransaction = createAsyncThunk(
  "transaction/createBotTransaction",
  async (payload: BotPayload, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<BotDataResponse>>('/api/bot', payload)
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);


export const scrapingURLTransaction = createAsyncThunk(
  "transaction/scrapingURLTransaction",
  async (payload: ScrapingURLPayload, { rejectWithValue }) => {
    const endPoint = "api/scraping/url"
    const cookies = new Cookies();
    const token = cookies.get('access_token');
  try {
    const response: any = await fetch(new URL(import.meta.env.VITE_API_URL).toString() + endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      
      body: JSON.stringify(payload),
    });
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let parsedLines

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }
      // Massage and parse the chunk of data
      const chunk = decoder.decode(value);
      console.log("chunk", chunk)

      return parsedLines = chunk  
    }
    return parsedLines;
  } catch (error: any) {
    console.log(error)
    return rejectWithValue(error.response.data.error);
  }
  }
);
