insert into "artists" ("name")
values      ('Wilder.');

insert into "addresses" ("line1", "city", "state", "country")
values      ('1652 Lincoln Ave', 'Anaheim', 'CA', 'USA'),
            ('2303 E Indian School Rd', 'Phoenix', 'AZ', 'USA'),
            ('310 Pacific Ave', 'Henderson', 'NV', 'USA'),
            ('1489 Major St', 'Salt Lake City', 'UT', 'USA'),
            ('2935 W 7th Ave', 'Denver', 'CO', 'USA');

insert into "venues" ("name", "addressId")
values      ('Chain Reaction', 1),
            ('Rebel Lounge', 2),
            ('Eagles Aerie Hall', 3),
            ('Loading Dock', 4),
            ('7th Circle', 5);

insert into "shows" ("venueId", "artistId", "date")
values      (1, 1, DATE '2023-1-5'),
            (2, 1, DATE '2023-1-6'),
            (3, 1, DATE '2023-1-7'),
            (4, 1, DATE '2023-1-8'),
            (5, 1, DATE '2023-1-9');

insert into "notes" ("details", "showId")
values      (
  'Showers: Yes
   Laundry: No
   Catering: Albertos
   Drinks: 2 tix per band member
   Wifi: genericWifiName
   Password: lfzFinalProject',
   1
),
(
  'Gonna be HOT today. Stay hydrated',
  2
),
(
  'Show ends early - early bus call so we can hit the strip.',
  3
),
(
  '12 hour drive next day. Sleep up.',
  4
),
(
  'coffee beforehand @ HuckleBerry.',
  5
);

insert into "contacts" ("email", "name", "phone","showId")
values      ('booker@booking.com', 'Edgy Promoter Dude','7777777', 1),
            ('jon@theagency.com', 'Jon V.', '6267726524', 2),
            ('bane@theagency.com', 'Jim Bane', '5624425672', 3),
            ('tomingo@theagency.com', 'Vlad T.', '6765526726', 4),
            ('vilash@theagency.com', 'Perdeep V.', '7876252442', 5);

insert into "schedules" ("startTime", "endTime", "details", "showId")
values
('8:00', '11:00', 'TRAVEL', 1
),(
  '16:00', '17:00', 'LOAD IN', 1
),(
  '17:00', '18:00', 'WILDER SOUNDCHECK', 1
),(
  '18:00', '19:00', 'SUPPORT SOUNDCHECK', 1
),(
  '19:00', '20:00', 'DOORS', 1
),(
  '20:00', '20:30', 'SUPPORT 1', 1
),(
  '20:30', '20:45', 'CHANGEOVER', 1
),(
  '20:45', '21:15', 'SUPPORT 2', 1
),(
  '21:15', '21:30', 'CHANGEOVER', 1
),(
  '21:30', '22:30', 'WILDER', 1
),(
  '23:00', '24:00', 'CURFEW', 1
),(
  '24:00', '0:00', 'DEPART', 1
);
