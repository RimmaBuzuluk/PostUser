create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    login VARCHAR(255),
    password VARCHAR(255),
    profile_type VARCHAR(20) -- 'Author' или 'Commentator'
);

create TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content VARCHAR(255),
    user_id INTEGER,
    post_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id), 
    FOREIGN KEY (post_id) REFERENCES posts (id)
);