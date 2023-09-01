import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';

import { SuccessResponse } from '../type';
import { BotPayload, BotDataResponse, ScrapingURLPayload } from './type';
import Cookies from 'universal-cookie';
import store from '@/states/store';
import { loadFetchLink } from '@/states/buildChatBot/buildChatBot.slice';


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
  async (params: ScrapingURLPayload, { rejectWithValue }) => {
    const endPoint = "api/scraping/url"
    const cookies = new Cookies();
    const token = cookies.get('access_token');
    const { setValueProcess, ...payload } = params
  try {
    const response: any = await fetch(new URL(import.meta.env.VITE_API_URL).toString() + endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      
      body: JSON.stringify(payload),
    });
    const reader = response.body?.getReader();
    const decoder = new TextDecoder("utf-8");
    let data;

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }
      // Massage and parse the chunk of data
      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");

      const parsedLines = lines
      .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
      .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
      .map((line) => {
        return JSON.parse(line)}); // Parse the JSON string
        data = parsedLines  
        setValueProcess(data[0]) ;
    }
    return data;
  } catch (error: any) {
    console.log(error)
    return rejectWithValue(error.response.data.error);
  }
  }
);
