import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input style={{
            padding: 10,
        }} type="text" placeholder="Title" onChange={(e) => {
            const value = e.target.value;
            setTitle(e.target.value);
        }} /> <br /> <br />
        <input style={{
            padding: 10,
        }} type="text" placeholder="Description" onChange={(e) => {
            const value = e.target.value;
            setDescription(e.target.value);
        }
        } /> <br /> <br />

        <button style={{
            padding: 8
        }} onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(async (res) => {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}