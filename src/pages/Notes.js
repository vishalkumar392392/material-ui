import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:8000/notes");
      const response = await data.json();
      setNotes(response);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    setNotes(notes.filter((note) => note.id !== id));
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      {/* <Grid container spacing={3}>
      {notes && notes.map(note => (
        <Grid item key={note.id} xs={12} md={6} lg={4} xl={2}> 
          <NoteCard note={note} handleDelete={handleDelete}/>
        </Grid>
      ))}
      </Grid> */}

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes &&
          notes.map((note) => (
            <div item key={note.id} xs={12} md={6} lg={4} xl={2}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </div>
          ))}
      </Masonry>
    </Container>
  );
}
