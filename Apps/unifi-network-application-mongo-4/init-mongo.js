db.getSiblingDB('unifi').createUser({
  user: 'unifi',
  pwd: 'unifi_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'unifi',
    },
    {
      role: 'dbOwner',
      db: 'unifi_stat',
    },
  ],
});
