
class TimeFormat extends HTMLElement {
  static get observedAttributes() {
    return ['datetime','year','month','day','hour','minute','second','time-zone-name'];
  }
  connectedCallback() {
    const datetime = this.getAttribute("datetime");
    let date = new Date(datetime || Date.now());
    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute("year") || undefined,
      month: this.getAttribute("month") || undefined,
      day: this.getAttribute("day") || undefined,
      hour: this.getAttribute("hour") || undefined,
      minute: this.getAttribute("minute") || undefined,
      second: this.getAttribute("second") || undefined,
      timeZoneName: this.getAttribute("time-zone-name") || undefined,
    }).format(date);
  }
}