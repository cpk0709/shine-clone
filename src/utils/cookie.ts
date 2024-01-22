export function setCookie(cname: string, value: string, expire: number) {
  if (window && document) {
    const todayValue = new Date();

    try {
      todayValue.setDate(todayValue.getDate() + expire);
      // eslint-disable-next-line unicorn/no-document-cookie
      document.cookie =
        cname +
        '=' +
        encodeURI(value) +
        '; expires=' +
        todayValue.toUTCString() +
        '; path=/;';
    } catch (error: unknown) {
      console.error(error);
    }
  }
}

export function getCookie(name: string): string {
  if (window && document) {
    const cookieName = name + '=';
    let x = 0;

    while (x <= document.cookie.length) {
      const y = x + cookieName.length;

      if (document.cookie.slice(x, y) === cookieName) {
        let lastChrCookie;

        if ((lastChrCookie = document.cookie.indexOf(';', y)) === -1) {
          lastChrCookie = document.cookie.length;
        }

        return decodeURI(document.cookie.slice(y, lastChrCookie));
      }

      x = document.cookie.indexOf(' ', x) + 1;

      if (x === 0) {
        break;
      }
    }
  }

  return '';
}
