@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  url = 'https://translation.googleapis.com/language/translate/v2';

  constructor(private http: HttpClient) {}
  translate(text: string) {
    return this.http
      .post(this.url, {
        q: text,
        target: 'es',
      })
      .pipe(
        map((res: any) => {
          return res.data.translations[0].translatedText;
        })
      );
  }
}
