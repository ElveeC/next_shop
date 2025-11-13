export enum AppRoute {
  HomePage = "/",
  Racket = "/racket",
  Rackets = "/rackets",
  Top10 = "/rackets/top-10",
  Login = "/login",
  Signup = "/signup"
}

export enum Page {
  HomePage = "Главная",
  Rackets = "Ракетки",
  Top10 = "Top-10",
  Login = "Войти",
  Signup = "Зарегистрироваться"
}

export enum BrandFilter {
  All = "all",
  Head = "head",
  Yonex = "yonex"
}

export const TOP_10_REQUEST_TAG = "getTop10Rackets";

export const BASE_API_URL = "http://localhost:4000/api";
