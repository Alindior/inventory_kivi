import normalizeUrl from 'normalize-url';

export default class UrlService {
  static getNormalizedUrl(url: string): string {
    return normalizeUrl(url);
  }
}
