export class routes {
    private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }

//auth routes
public static get landing(): string {
  return this.baseUrl + '/landing';
}
public static get login(): string {
  return this.baseUrl + '/login';
}
public static get register(): string {
  return this.baseUrl + '/register';
}
public static get forgotPassword(): string {
  return this.baseUrl + '/forgot-password';
}
public static get changePassword(): string {
  return this.baseUrl + '/change-password';
}
// error 
public static get error404(): string {
  return this.baseUrl + '/error-404';
}
public static get error500(): string {
  return this.baseUrl + '/error-500';
}
public static get underMaintenance(): string {
  return this.baseUrl + '/under-maintenance';
}
public static get comingSoon(): string {
  return this.baseUrl + '/coming-soon';
}


public static get home(): string {
  return this.baseUrl + '/index';
}
public static get home2(): string {
  return this.baseUrl + '/index-2';
}
public static get home3(): string {
  return this.baseUrl + '/index-3';
}
public static get home4(): string {
  return this.baseUrl + '/index-4';
}
public static get home5(): string {
  return this.baseUrl + '/index-5';
}
public static get home6(): string {
  return this.baseUrl + '/index-6';
}

public static get hotel(): string {
  return this.baseUrl + '/hotel';
}
public static get hotelList(): string {
  return this.hotel + '/hotel-list';
}
public static get hotelMap(): string {
  return this.hotel + '/hotel-map';
}
public static get hotelGrid(): string {
  return this.hotel + '/hotel-grid';
}
public static get hotelDetails(): string {
  return this.hotel + '/hotel-details';
}
public static get hotelBooking(): string {
  return this.hotel + '/hotel-booking';
}
public static get addHotel(): string {
  return this.hotel + '/add-hotel';
}
public static get editHotel(): string {
  return this.hotel + '/edit-hotel';
}
public static get bookingConfirmation(): string {
  return this.hotel + '/booking-confirmation';
}

}


