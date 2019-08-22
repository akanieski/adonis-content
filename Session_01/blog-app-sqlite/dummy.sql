INSERT INTO
  "users" (
    created_at,
    email,
    password,
    updated_at,
    username
  )
VALUES
  (
    date(),
    'tester@contoso.org',
    'password',
    date(),
    'tester'
  );

  INSERT INTO
    "posts" (
      author_id,
      content,
      created_at,
      title,
      updated_at
    )
  VALUES
    (
      1,
      'Data stored in a database can be persisted between application starting and stopping',
      date(),
      'Data From The Database is Great!',
      date()
    );